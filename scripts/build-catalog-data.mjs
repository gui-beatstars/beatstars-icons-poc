/**
 * build-catalog-data.mjs
 * 
 * Builds the data file that powers the icon catalog web page.
 * Embeds the actual SVG content so the catalog can render icons without
 * needing the React library installed.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SVG_DIR_PRIMARY = path.join(ROOT, 'svg-optimized');
const SVG_DIR_FALLBACK = path.join(ROOT, 'dist', 'svg');
const OUTPUT_FILE = path.join(ROOT, 'web', 'catalog-data.js');

function toPascalCase(str) {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Derive searchable tags from the icon name.
 */
function deriveTags(fileName) {
  const parts = fileName.replace(/^icon-/, '').split('-');
  const tags = [...parts];

  // Add common aliases
  const aliases = {
    play: ['start', 'media', 'audio', 'video'],
    pause: ['stop', 'media', 'halt'],
    beat: ['music', 'rhythm', 'drum'],
    track: ['song', 'music', 'audio'],
    heart: ['like', 'favorite', 'love'],
    star: ['favorite', 'rating', 'review'],
    search: ['find', 'lookup', 'magnify'],
    user: ['person', 'profile', 'account'],
    cart: ['shop', 'buy', 'purchase', 'basket'],
    download: ['save', 'export', 'get'],
    upload: ['import', 'send', 'share'],
    share: ['social', 'send', 'forward'],
    edit: ['modify', 'change', 'pencil', 'write'],
    delete: ['remove', 'trash', 'bin'],
    close: ['x', 'dismiss', 'cancel'],
    check: ['done', 'complete', 'success', 'tick'],
    arrow: ['direction', 'navigate', 'pointer'],
    chevron: ['arrow', 'expand', 'collapse'],
    menu: ['hamburger', 'navigation', 'bars'],
    settings: ['gear', 'cog', 'preferences', 'config'],
    notification: ['bell', 'alert', 'ring'],
    message: ['chat', 'comment', 'bubble'],
    folder: ['directory', 'file', 'storage'],
    lock: ['security', 'private', 'password'],
    eye: ['view', 'visible', 'show', 'watch'],
    mic: ['microphone', 'record', 'voice', 'audio'],
    volume: ['sound', 'speaker', 'audio', 'mute'],
  };

  for (const part of parts) {
    if (aliases[part]) {
      tags.push(...aliases[part]);
    }
  }

  return [...new Set(tags)];
}

/**
 * Auto-detect icon style from SVG content.
 *
 * Note: Some Figma components export with outlined (filled) strokes even though
 * they appear as stroke icons in Figma. These are detected by the presence of
 * fill="currentColor" *without* any stroke attributes, combined with very large
 * path data (> 500 chars) — a hallmark of expanded/outlined strokes.
 * We mark these as 'stroke' since that's their intended design.
 */
function detectStyle(svgContent) {
  const hasFill = /fill="currentColor"/.test(svgContent);
  const hasStroke = /stroke="currentColor"/.test(svgContent);

  if (hasFill && hasStroke) return 'mixed';

  if (hasFill && !hasStroke) {
    // Check if this is an outlined stroke (Figma export artifact).
    // Outlined strokes produce enormous path data (> 500 chars) because the
    // stroke geometry is expanded into filled shapes.
    const pathMatch = svgContent.match(/<path[^>]*\bd="([^"]*)"/);
    if (pathMatch && pathMatch[1].length > 500) {
      return 'stroke'; // Outlined stroke — treat as stroke icon
    }
    return 'fill';
  }

  return 'stroke';
}

/**
 * Derive a category from the icon filename.
 * Maps icons into logical groups based on name patterns.
 */
function deriveCategory(fileName) {
  const name = fileName.replace(/^icon-/, '');

  // Category rules — order matters (first match wins)
  const rules = [
    // Navigation & Arrows
    { pattern: /^arrow|^chevron|^navigate/, category: 'Arrows' },
    // Media & Audio
    { pattern: /play|pause|skip|shuffle|repeat|loop|volume|speaker|mic|headphone|music|note|lyric|bpm|sound|queue|tracklist|playlist|radio|airplay|cast|midi|keyboard/, category: 'Media & Audio' },
    // User & Account
    { pattern: /^user|^login|^logout|membership|collaborat|invite|gender/, category: 'Users' },
    // Commerce & Finance
    { pattern: /cart|bag|shop|currency|dollar|bitcoin|ethereum|euro|pound|ruble|rupee|yen|wallet|payout|sale|credit|bank|transaction|chargeback|pix|coins/, category: 'Commerce' },
    // Communication
    { pattern: /message|email|send|reply|repost|megaphone|bell|notification/, category: 'Communication' },
    // Files & Documents
    { pattern: /file|document|doc|folder|attachment|paperclip|note-paper/, category: 'Files' },
    // Editing & Tools
    { pattern: /edit|pen|copy|replace|sliders|filter|sort|reorder|hammer|broom|paint|scan|scale/, category: 'Editing' },
    // Layout & UI
    { pattern: /grid|panel|menu|maximize|minimize|toggle|list|embed|text|type|ratio|mirror|layers/, category: 'Layout' },
    // Devices
    { pattern: /device|laptop|phone|desktop|tv|printer|gamepad|video-recorder/, category: 'Devices' },
    // Social & Branding
    { pattern: /heart|star|thumbs|share|like|repost|hashtag|canva|dropbox|google|voloco|git-box/, category: 'Social & Brands' },
    // Time
    { pattern: /clock|calendar|hourglass|alarm/, category: 'Time' },
    // Security
    { pattern: /lock|unlock|shield|key|fingerprint|blocked|eye/, category: 'Security' },
    // Status & Alerts
    { pattern: /check|close|minus|plus|error|warning|exclamation|info|help|loading|refresh|reload/, category: 'Status' },
    // Maps & Location
    { pattern: /map|pin|marer|globe|compass|target/, category: 'Location' },
    // Misc / General
    { pattern: /search|home|settings|power|rocket|diamond|gift|trophy|lemon|cookie|halloween|snowflake|moon|sun|drop|chip|flag|tag|link|life|bulb|feed|telescope|similar|promote|percent|graph|gauge|bar-chart|image|camera|video-stream|signal|cloud|disk|distro|merch|exclusive|services|save|download|upload|zoom|rotate|scan-rights|my-content/, category: 'General' },
  ];

  for (const { pattern, category } of rules) {
    if (pattern.test(name)) return category;
  }

  return 'General';
}

async function main() {
  let SVG_DIR;
  try {
    await fs.access(SVG_DIR_PRIMARY);
    SVG_DIR = SVG_DIR_PRIMARY;
  } catch {
    try {
      await fs.access(SVG_DIR_FALLBACK);
      SVG_DIR = SVG_DIR_FALLBACK;
      console.log('ℹ️  Using dist/svg/ (svg-optimized/ not found)');
    } catch {
      console.error('❌ No SVG directory found. Run the build pipeline first.');
      process.exit(1);
    }
  }

  const files = (await fs.readdir(SVG_DIR)).filter((f) => f.endsWith('.svg'));

  if (files.length === 0) {
    console.error('❌ No SVG files found.');
    process.exit(1);
  }

  console.log(`📖 Building catalog data for ${files.length} icons...`);

  const icons = [];

  for (const file of files) {
    const fileName = path.basename(file, '.svg');
    const componentName = toPascalCase(fileName) + 'Icon';
    const svgContent = await fs.readFile(path.join(SVG_DIR, file), 'utf-8');

    icons.push({
      name: componentName,
      fileName,
      kebab: toKebabCase(componentName.replace(/Icon$/, '')),
      tags: deriveTags(fileName),
      category: deriveCategory(fileName),
      style: detectStyle(svgContent),
      svg: svgContent,
      importStatement: `import { ${componentName} } from '@beatstars/icons';`,
      jsxUsage: `<${componentName} size={24} />`,
    });
  }

  // Sort alphabetically
  icons.sort((a, b) => a.name.localeCompare(b.name));

  // Write as a JS module the catalog HTML can load
  const output = `// Auto-generated catalog data — do not edit manually
// Generated at: ${new Date().toISOString()}
// Total icons: ${icons.length}

window.BEATSTARS_ICONS = ${JSON.stringify(icons, null, 2)};
`;

  await fs.mkdir(path.join(ROOT, 'web'), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, output, 'utf-8');

  console.log(`✅ Catalog data written to ./web/catalog-data.js (${icons.length} icons)`);
}

main().catch((err) => {
  console.error('💥 Unexpected error:', err);
  process.exit(1);
});
