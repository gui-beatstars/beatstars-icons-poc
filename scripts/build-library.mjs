/**
 * build-library.mjs
 * 
 * Bundles the icon library for distribution using esbuild.
 * Outputs both CJS and ESM formats with TypeScript declarations.
 */

import { build } from 'esbuild';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

async function main() {
  console.log('📦 Building library...');

  // Clean dist
  await fs.rm(path.join(ROOT, 'dist'), { recursive: true, force: true });

  // Find all icon files for individual entry points (tree-shaking friendly)
  const iconsDir = path.join(ROOT, 'src', 'icons');
  const iconFiles = (await fs.readdir(iconsDir))
    .filter((f) => f.endsWith('.tsx') && f !== 'index.ts');

  const entryPoints = [
    path.join(ROOT, 'src', 'index.ts'),
    path.join(ROOT, 'src', 'types.ts'),
    path.join(ROOT, 'src', 'createIcon.tsx'),
    path.join(iconsDir, 'index.ts'),
    ...iconFiles.map((f) => path.join(iconsDir, f)),
  ];

  // ESM build
  await build({
    entryPoints,
    outdir: path.join(ROOT, 'dist', 'esm'),
    format: 'esm',
    bundle: false,
    jsx: 'automatic',
    platform: 'neutral',
    target: 'es2020',
    outExtension: { '.js': '.js' },
  });

  console.log('  ✓ ESM build');

  // CJS build
  await build({
    entryPoints,
    outdir: path.join(ROOT, 'dist', 'cjs'),
    format: 'cjs',
    bundle: false,
    jsx: 'automatic',
    platform: 'neutral',
    target: 'es2020',
    outExtension: { '.js': '.js' },
  });

  console.log('  ✓ CJS build');

  // Generate TypeScript declarations
  try {
    execSync('npx tsc --emitDeclarationOnly --declaration --outDir dist/types', {
      cwd: ROOT,
      stdio: 'pipe',
    });
    console.log('  ✓ TypeScript declarations');
  } catch (err) {
    console.warn('  ⚠️  TypeScript declaration generation failed (non-critical)');
    console.warn('     Run `npx tsc` manually to debug type issues');
  }

  // Copy optimized SVGs to dist for direct SVG access
  const svgSrc = path.join(ROOT, 'svg-optimized');
  const svgDst = path.join(ROOT, 'dist', 'svg');
  await fs.cp(svgSrc, svgDst, { recursive: true }).catch(() => {
    console.warn('  ⚠️  No optimized SVGs to copy');
  });

  console.log('');
  console.log('✅ Library built → ./dist/');
  console.log('   ESM: dist/esm/');
  console.log('   CJS: dist/cjs/');
  console.log('   Types: dist/types/');
  console.log('   SVGs: dist/svg/');
}

main().catch((err) => {
  console.error('💥 Build failed:', err);
  process.exit(1);
});
