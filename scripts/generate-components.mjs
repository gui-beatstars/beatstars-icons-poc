/**
 * generate-components.mjs
 * 
 * Takes optimized SVGs and generates React components + TypeScript types.
 * Each SVG becomes a named React component with consistent props (like Lucide).
 * 
 * Output structure:
 *   src/icons/PlayIcon.tsx
 *   src/icons/BeatIcon.tsx
 *   src/icons/index.ts        (barrel export)
 *   src/Icon.tsx               (base Icon wrapper component)
 *   src/types.ts               (shared TypeScript types)
 *   src/index.ts               (package entry point)
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const INPUT_DIR = path.join(ROOT, 'svg-optimized');
const OUTPUT_DIR = path.join(ROOT, 'src');
const ICONS_DIR = path.join(OUTPUT_DIR, 'icons');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Convert kebab-case filename to PascalCase component name.
 * e.g. "play-circle" → "PlayCircle"
 * e.g. "arrow-up-right" → "ArrowUpRight"
 */
function toPascalCase(str) {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * Extract the inner content of an SVG (everything inside the <svg> tag).
 * Also extracts the viewBox for consistency.
 */
function parseSvg(svgContent) {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extract inner content (between <svg> and </svg>)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  const inner = innerMatch ? innerMatch[1].trim() : '';

  // Convert SVG attributes to JSX (e.g. stroke-width → strokeWidth)
  const jsxInner = inner
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/clip-path/g, 'clipPath')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/stroke-opacity/g, 'strokeOpacity')
    .replace(/stroke-dasharray/g, 'strokeDasharray')
    .replace(/stroke-dashoffset/g, 'strokeDashoffset')
    .replace(/stop-color/g, 'stopColor')
    .replace(/stop-opacity/g, 'stopOpacity');

  return { viewBox, inner: jsxInner };
}

/**
 * Generate a React component file for a single icon.
 */
function generateComponent(name, svgContent) {
  const { viewBox, inner } = parseSvg(svgContent);

  // Detect if this is a stroke-based or fill-based icon
  const hasFillContent = inner.includes('fill="currentColor"');
  const hasStrokeContent = inner.includes('stroke="currentColor"');

  // Set root SVG defaults based on icon type:
  // - Stroke icons (like Lucide): fill="none", stroke={color}
  // - Fill icons: fill={color}, no stroke override
  // - Mixed: don't override either, let inner elements control
  let rootFill, rootStroke;
  if (hasFillContent && !hasStrokeContent) {
    rootFill = '{color}';
    rootStroke = null;
  } else if (!hasFillContent && hasStrokeContent) {
    rootFill = '"none"';
    rootStroke = '{color}';
  } else {
    // Mixed or neither — don't override, let inner paths control
    rootFill = '"none"';
    rootStroke = null;
  }

  const strokeAttr = rootStroke ? `\n      stroke=${rootStroke}` : '';

  return `import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ${name} = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth, className, style, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill=${rootFill}${strokeAttr}
      className={className}
      style={style}
      {...rest}
    >
      ${inner}
    </svg>
  )
);

${name}.displayName = '${name}';

export default ${name};
`;
}

// ---------------------------------------------------------------------------
// Static files (base types, wrapper component)
// ---------------------------------------------------------------------------

const TYPES_FILE = `import type { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Icon size in pixels. Sets both width and height.
   * @default 24
   */
  size?: number | string;

  /**
   * Icon color. Accepts any valid CSS color value.
   * @default 'currentColor'
   */
  color?: string;

  /**
   * Stroke width for line-style icons.
   * @default undefined (uses SVG's own stroke-width)
   */
  strokeWidth?: number | string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
`;

const CREATE_ICON_FILE = `import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * Factory function to create an icon component from raw SVG path data.
 * Useful if you want to add icons programmatically without the build step.
 * 
 * @example
 * const CustomIcon = createIcon({
 *   displayName: 'CustomIcon',
 *   viewBox: '0 0 24 24',
 *   path: '<path d="M12 2L2 22h20L12 2z" fill="currentColor" />',
 * });
 */
export function createIcon({
  displayName,
  viewBox = '0 0 24 24',
  path,
}: {
  displayName: string;
  viewBox?: string;
  path: string;
}) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, color = 'currentColor', strokeWidth, className, style, ...rest }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        className={className}
        style={style}
        {...rest}
        dangerouslySetInnerHTML={{ __html: path }}
      />
    )
  );

  Icon.displayName = displayName;
  return Icon;
}
`;

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // Check input directory exists
  try {
    await fs.access(INPUT_DIR);
  } catch {
    console.error('❌ No svg-optimized/ directory found. Run `npm run optimize` first.');
    process.exit(1);
  }

  const files = (await fs.readdir(INPUT_DIR)).filter((f) => f.endsWith('.svg'));

  if (files.length === 0) {
    console.error('❌ No SVG files found in svg-optimized/.');
    process.exit(1);
  }

  console.log(`⚙️  Generating ${files.length} React components...`);

  // Prepare output directories
  await fs.mkdir(ICONS_DIR, { recursive: true });

  // Clear existing generated files
  const existingIcons = await fs.readdir(ICONS_DIR).catch(() => []);
  for (const file of existingIcons) {
    await fs.unlink(path.join(ICONS_DIR, file));
  }

  // Generate each icon component
  const iconEntries = [];

  for (const file of files) {
    const baseName = path.basename(file, '.svg');
    const componentName = toPascalCase(baseName) + 'Icon';
    const svgContent = await fs.readFile(path.join(INPUT_DIR, file), 'utf-8');

    const component = generateComponent(componentName, svgContent);
    const outputFile = path.join(ICONS_DIR, `${componentName}.tsx`);

    await fs.writeFile(outputFile, component, 'utf-8');

    iconEntries.push({
      componentName,
      fileName: baseName,
      file: `${componentName}.tsx`,
    });

    console.log(`  ✓ ${componentName}`);
  }

  // Generate barrel export for icons
  const barrelExport = iconEntries
    .map((e) => `export { default as ${e.componentName} } from './${e.componentName}';`)
    .join('\n');

  await fs.writeFile(
    path.join(ICONS_DIR, 'index.ts'),
    barrelExport + '\n',
    'utf-8'
  );

  // Generate types file
  await fs.writeFile(path.join(OUTPUT_DIR, 'types.ts'), TYPES_FILE, 'utf-8');

  // Generate createIcon utility
  await fs.writeFile(path.join(OUTPUT_DIR, 'createIcon.tsx'), CREATE_ICON_FILE, 'utf-8');

  // Generate main entry point
  const mainEntry = `// Auto-generated — do not edit manually
// Run \`npm run build:icons\` to regenerate

export type { IconProps, IconComponent } from './types';
export { createIcon } from './createIcon';
export * from './icons';
`;

  await fs.writeFile(path.join(OUTPUT_DIR, 'index.ts'), mainEntry, 'utf-8');

  console.log('');
  console.log(`✅ Generated ${iconEntries.length} React icon components → ./src/icons/`);
  console.log('📦 Entry point: ./src/index.ts');

  // Write icon metadata for the catalog web page
  const metadata = iconEntries.map((e) => ({
    name: e.componentName,
    fileName: e.fileName,
    importName: e.componentName,
  }));

  await fs.writeFile(
    path.join(ROOT, 'icon-metadata.json'),
    JSON.stringify(metadata, null, 2),
    'utf-8'
  );

  console.log('📋 Metadata written to ./icon-metadata.json');
}

main().catch((err) => {
  console.error('💥 Unexpected error:', err);
  process.exit(1);
});
