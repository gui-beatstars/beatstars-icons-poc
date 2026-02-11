/**
 * fetch-from-figma.mjs
 * 
 * Pulls icon SVGs directly from a Figma file using the Figma REST API.
 * 
 * Setup:
 *   1. Create a Figma Personal Access Token: https://www.figma.com/developers/api#access-tokens
 *   2. Set it as FIGMA_TOKEN environment variable (or in .env file)
 *   3. Set FIGMA_FILE_KEY to your Figma file's key (from the URL)
 *   4. Set FIGMA_ICON_FRAME_ID to the frame/page containing your icons
 * 
 * How it works:
 *   - Reads the Figma file tree to find all component nodes inside the target frame
 *   - Requests SVG exports for each icon via the Figma Image API
 *   - Downloads and saves each SVG to ./svg-raw/
 * 
 * Usage:
 *   FIGMA_TOKEN=xxx FIGMA_FILE_KEY=abc123 FIGMA_ICON_FRAME_ID=1:23 node scripts/fetch-from-figma.mjs
 */

import './load-env.mjs';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'svg-raw');

// ---------------------------------------------------------------------------
// Configuration — override via environment variables or .env
// ---------------------------------------------------------------------------

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ICON_FRAME_ID = process.env.FIGMA_ICON_FRAME_ID; // e.g. "123:456"

// Optional: filter by a naming convention (e.g. icons must start with "icon/")
const ICON_NAME_PREFIX = process.env.ICON_NAME_PREFIX || '';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function figmaApi(endpoint) {
  const res = await fetch(`https://api.figma.com/v1${endpoint}`, {
    headers: { 'X-Figma-Token': FIGMA_TOKEN },
  });
  if (!res.ok) {
    throw new Error(`Figma API error ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

/**
 * Recursively collect all COMPONENT and COMPONENT_SET nodes from a subtree.
 * For COMPONENT_SET nodes, we collect their direct COMPONENT children instead.
 */
function collectIconNodes(node, results = []) {
  if (node.type === 'COMPONENT') {
    results.push({
      id: node.id,
      name: node.name,
    });
  } else if (node.type === 'COMPONENT_SET') {
    // For component sets (variants), grab each variant
    for (const child of node.children || []) {
      if (child.type === 'COMPONENT') {
        // Use parent name + variant props for a unique name
        const variantSuffix = child.name.replace(/,\s*/g, '-').replace(/=/g, '-');
        results.push({
          id: child.id,
          name: `${node.name}/${variantSuffix}`,
        });
      }
    }
  }

  // Keep traversing into frames, groups, etc.
  if (node.children && node.type !== 'COMPONENT_SET') {
    for (const child of node.children) {
      collectIconNodes(child, results);
    }
  }

  return results;
}

/**
 * Convert a Figma node name to a clean filename.
 * e.g. "icon/play-circle" → "play-circle"
 * e.g. "Icons / Media / Play" → "media-play"
 */
function toFilename(name) {
  let clean = name;

  // Remove prefix if configured
  if (ICON_NAME_PREFIX && clean.startsWith(ICON_NAME_PREFIX)) {
    clean = clean.slice(ICON_NAME_PREFIX.length);
  }

  return clean
    .replace(/\s*\/\s*/g, '-')  // slashes → hyphens
    .replace(/\s+/g, '-')       // spaces → hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // strip special chars
    .replace(/-+/g, '-')        // collapse multiple hyphens
    .replace(/^-|-$/g, '')      // trim leading/trailing hyphens
    .toLowerCase();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // Validate config
  if (!FIGMA_TOKEN) {
    console.error('❌ Missing FIGMA_TOKEN. Set it as an environment variable.');
    console.error('   Get one at: https://www.figma.com/developers/api#access-tokens');
    process.exit(1);
  }
  if (!FIGMA_FILE_KEY) {
    console.error('❌ Missing FIGMA_FILE_KEY. Set it as an environment variable.');
    console.error('   Find it in your Figma file URL: figma.com/design/<FILE_KEY>/...');
    process.exit(1);
  }
  if (!FIGMA_ICON_FRAME_ID) {
    console.error('❌ Missing FIGMA_ICON_FRAME_ID. Set it as an environment variable.');
    console.error('   This is the node ID of the frame containing your icons.');
    console.error('   Find it by selecting the frame in Figma → right-click → "Copy link"');
    console.error('   The node-id parameter in the URL is what you need (e.g. "123:456")');
    process.exit(1);
  }

  console.log('📡 Fetching file structure from Figma...');
  
  // Step 1: Get the file tree for the target frame
  const fileData = await figmaApi(
    `/files/${FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(FIGMA_ICON_FRAME_ID)}`
  );

  const frameNode = fileData.nodes?.[FIGMA_ICON_FRAME_ID]?.document;
  if (!frameNode) {
    console.error(`❌ Could not find frame with ID "${FIGMA_ICON_FRAME_ID}" in the file.`);
    process.exit(1);
  }

  console.log(`📂 Found frame: "${frameNode.name}"`);

  // Step 2: Collect all icon component nodes
  const iconNodes = collectIconNodes(frameNode);

  if (iconNodes.length === 0) {
    console.error('❌ No icon components found in the target frame.');
    console.error('   Make sure your icons are Figma Components (not just groups/frames).');
    process.exit(1);
  }

  console.log(`🎨 Found ${iconNodes.length} icon components`);

  // Step 3: Request SVG exports from Figma
  const nodeIds = iconNodes.map((n) => n.id).join(',');
  console.log('📥 Requesting SVG exports from Figma API...');

  const imagesData = await figmaApi(
    `/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(nodeIds)}&format=svg&svg_include_id=false&svg_simplify_stroke=true`
  );

  if (imagesData.err) {
    console.error('❌ Figma image export error:', imagesData.err);
    process.exit(1);
  }

  // Step 4: Download each SVG
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Clear existing files
  const existing = await fs.readdir(OUTPUT_DIR);
  for (const file of existing) {
    if (file.endsWith('.svg')) {
      await fs.unlink(path.join(OUTPUT_DIR, file));
    }
  }

  let downloaded = 0;
  let failed = 0;

  for (const node of iconNodes) {
    const svgUrl = imagesData.images?.[node.id];
    if (!svgUrl) {
      console.warn(`⚠️  No SVG URL for "${node.name}" (${node.id}) — skipping`);
      failed++;
      continue;
    }

    try {
      const svgRes = await fetch(svgUrl);
      if (!svgRes.ok) throw new Error(`HTTP ${svgRes.status}`);
      const svgContent = await svgRes.text();

      const filename = toFilename(node.name) + '.svg';
      await fs.writeFile(path.join(OUTPUT_DIR, filename), svgContent, 'utf-8');
      downloaded++;
    } catch (err) {
      console.warn(`⚠️  Failed to download "${node.name}": ${err.message}`);
      failed++;
    }
  }

  console.log('');
  console.log(`✅ Downloaded ${downloaded} icons to ./svg-raw/`);
  if (failed > 0) {
    console.log(`⚠️  ${failed} icons failed to download`);
  }

  // Write a manifest for traceability
  const manifest = {
    fetchedAt: new Date().toISOString(),
    figmaFile: FIGMA_FILE_KEY,
    figmaFrame: FIGMA_ICON_FRAME_ID,
    iconCount: downloaded,
    icons: iconNodes.map((n) => ({
      id: n.id,
      figmaName: n.name,
      filename: toFilename(n.name) + '.svg',
    })),
  };

  await fs.writeFile(
    path.join(OUTPUT_DIR, '_manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf-8'
  );

  console.log('📋 Manifest written to ./svg-raw/_manifest.json');
}

main().catch((err) => {
  console.error('💥 Unexpected error:', err);
  process.exit(1);
});
