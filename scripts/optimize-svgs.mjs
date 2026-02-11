/**
 * optimize-svgs.mjs
 * 
 * Takes raw SVGs from Figma (./svg-raw/) and optimizes them with SVGO.
 * Output goes to ./svg-optimized/ — clean, consistent, minimal SVGs.
 * 
 * What it does:
 *   - Removes Figma-specific metadata and cruft
 *   - Normalizes viewBox to consistent sizing
 *   - Removes hardcoded colors (replaces with currentColor for easy theming)
 *   - Strips unnecessary attributes, groups, and transforms
 *   - Outputs clean SVGs ready for component generation
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const INPUT_DIR = path.join(ROOT, 'svg-raw');
const OUTPUT_DIR = path.join(ROOT, 'svg-optimized');

// ---------------------------------------------------------------------------
// SVGO Configuration — tuned for icon libraries
// ---------------------------------------------------------------------------

const svgoConfig = {
  multipass: true,
  plugins: [
    // Remove unnecessary stuff
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    'removeUnusedNS',
    
    // Clean up structure
    'collapseGroups',
    // NOTE: mergePaths is intentionally omitted — it removes tiny path segments
    // that represent dots on icons like exclamation (!), help-circle (?), info (i).
    // These dots are encoded as 0.01px H commands (e.g. M12 16H12.01) which
    // mergePaths considers imperceptible and strips out.
    'convertShapeToPath',

    // Optimize paths
    {
      name: 'convertPathData',
      params: {
        floatPrecision: 3,
      },
    },
    
    // Optimize transforms
    'convertTransform',
    
    // Remove Figma-specific attributes
    {
      name: 'removeAttrs',
      params: {
        attrs: ['data-name', 'class', 'style', 'id'],
      },
    },
    
    // Sort attributes for consistency
    'sortAttrs',
    
    // Remove default/useless values
    'removeUselessStrokeAndFill',
    
    // Set consistent viewBox
    'removeDimensions',
    
    // Replace hardcoded colors with currentColor (smartly)
    // - White/near-white fills → "none" (these are background rects from Figma)
    // - Black/dark fills → "currentColor" (actual icon content)
    // - Other fills → "currentColor" (assume intentional)
    // - Strokes follow the same logic
    {
      name: 'replaceColors',
      type: 'visitor',
      fn: () => {
        const isWhiteish = (color) => {
          if (!color) return false;
          const c = color.toLowerCase().trim();
          return c === 'white' || c === '#fff' || c === '#ffffff' ||
                 c === '#fefefe' || c === '#fdfdfd' || c === '#fbfbfb' ||
                 c === 'rgb(255, 255, 255)' || c === 'rgb(255,255,255)';
        };

        return {
          element: {
            enter: (node) => {
              const fill = node.attributes.fill;
              if (fill && fill !== 'none') {
                if (isWhiteish(fill)) {
                  // White fills are almost always Figma artboard backgrounds — make transparent
                  node.attributes.fill = 'none';
                } else {
                  node.attributes.fill = 'currentColor';
                }
              }

              const stroke = node.attributes.stroke;
              if (stroke && stroke !== 'none') {
                if (isWhiteish(stroke)) {
                  node.attributes.stroke = 'none';
                } else {
                  node.attributes.stroke = 'currentColor';
                }
              }
            },
          },
        };
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // Check input directory exists
  try {
    await fs.access(INPUT_DIR);
  } catch {
    console.error('❌ No svg-raw/ directory found. Run `npm run fetch` first.');
    process.exit(1);
  }

  const files = (await fs.readdir(INPUT_DIR)).filter((f) => f.endsWith('.svg'));

  if (files.length === 0) {
    console.error('❌ No SVG files found in svg-raw/. Run `npm run fetch` first.');
    process.exit(1);
  }

  console.log(`🔧 Optimizing ${files.length} SVGs...`);

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Clear existing optimized files
  const existing = await fs.readdir(OUTPUT_DIR);
  for (const file of existing) {
    if (file.endsWith('.svg')) {
      await fs.unlink(path.join(OUTPUT_DIR, file));
    }
  }

  let totalSaved = 0;

  for (const file of files) {
    const input = await fs.readFile(path.join(INPUT_DIR, file), 'utf-8');
    
    try {
      const result = optimize(input, {
        ...svgoConfig,
        path: path.join(INPUT_DIR, file),
      });

      await fs.writeFile(path.join(OUTPUT_DIR, file), result.data, 'utf-8');

      const saved = ((1 - result.data.length / input.length) * 100).toFixed(1);
      totalSaved += input.length - result.data.length;
      
      // Only log significant savings
      if (parseFloat(saved) > 10) {
        console.log(`  ✓ ${file} — ${saved}% smaller`);
      }
    } catch (err) {
      console.warn(`  ⚠️ Failed to optimize ${file}: ${err.message}`);
      // Copy as-is on failure
      await fs.copyFile(path.join(INPUT_DIR, file), path.join(OUTPUT_DIR, file));
    }
  }

  const savedKb = (totalSaved / 1024).toFixed(1);
  console.log('');
  console.log(`✅ Optimized ${files.length} SVGs → ./svg-optimized/ (saved ${savedKb}KB total)`);
}

main().catch((err) => {
  console.error('💥 Unexpected error:', err);
  process.exit(1);
});
