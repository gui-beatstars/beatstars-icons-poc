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
const SVG_DIR = path.join(ROOT, 'svg-optimized');
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
  const parts = fileName.split('-');
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

async function main() {
  try {
    await fs.access(SVG_DIR);
  } catch {
    console.error('❌ No svg-optimized/ directory found. Run the build pipeline first.');
    process.exit(1);
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
