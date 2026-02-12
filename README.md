# @beatstars/icons

Auto-generated React icon library from Figma. Tree-shakeable, typed, themeable.

**Live catalog:** [gui-beatstars.github.io/beatstars-icons-poc](https://gui-beatstars.github.io/beatstars-icons-poc/)

## Install

```bash
# From GitHub (current setup)
npm install github:gui-beatstars/beatstars-icons-poc

# From npm (when published)
npm install @beatstars/icons
```

## Usage

```tsx
import { BaseIconPlayIcon, BaseIconSearchIcon } from '@beatstars/icons';

function Player() {
  return (
    <div>
      <BaseIconPlayIcon size={24} />
      <BaseIconSearchIcon size={32} color="#C32D2D" />
    </div>
  );
}
```

### Props

Every icon accepts these props (plus all standard `<svg>` attributes):

| Prop          | Type               | Default          | Description                |
|---------------|--------------------|------------------|----------------------------|
| `size`        | `number \| string` | `24`             | Width and height in pixels |
| `color`       | `string`           | `'currentColor'` | Icon color (any CSS color) |
| `strokeWidth` | `number \| string` | SVG default      | Stroke width for line icons|
| `className`   | `string`           | —                | CSS class name             |
| `style`       | `CSSProperties`    | —                | Inline styles              |

All icons forward `ref` to the underlying `<svg>` element.

### Tree Shaking

Only the icons you import end up in your bundle:

```tsx
// Named import (recommended)
import { BaseIconPlayIcon } from '@beatstars/icons';

// Direct import
import BaseIconPlayIcon from '@beatstars/icons/dist/esm/icons/BaseIconPlayIcon';
```

### Both stroke and fill icons are supported

The pipeline auto-detects whether an icon is stroke-based (outline) or fill-based (solid) and sets the correct SVG attributes. The `color` prop works for both.

---

## Icon Catalog

Browse, search, and copy icons from the live catalog:

**[gui-beatstars.github.io/beatstars-icons-poc](https://gui-beatstars.github.io/beatstars-icons-poc/)**

The catalog supports:
- Search by name or tags
- Click an icon to see import/usage code
- Size preview (8px–64px)
- Keyboard shortcuts: `←` `→` navigate, `C` copy SVG, `Esc` close, `/` search

Or run locally:

```bash
npm run dev:catalog
# Opens at http://localhost:3333
```

---

## Pipeline

Icons flow from Figma to production through this automated pipeline:

```
Figma → Figma API → Raw SVGs → SVGO Optimization → React/TS Components → ESM/CJS Bundles
```

### Steps

| Step | Command | What it does |
|------|---------|-------------|
| 1 | `npm run fetch` | Pulls SVGs from Figma via REST API |
| 2 | `npm run optimize` | Cleans and optimizes with SVGO |
| 3 | `npm run generate` | Converts to React/TypeScript components |
| 4 | `npm run build:lib` | Bundles ESM + CJS + TypeScript declarations |
| 5 | `npm run build:catalog-data` | Generates catalog page data |
| **All** | **`npm run build`** | **Runs steps 1–5 in sequence** |

### SVGO Optimization

The optimizer (`scripts/optimize-svgs.mjs`) handles:
- Removing Figma metadata and cruft
- Normalizing colors to `currentColor` for theming (white fills → `none`, all others → `currentColor`)
- Path optimization with float precision 3 (preserves dots on `!`, `?`, `i` icons)
- `mergePaths` is intentionally disabled to preserve micro-segments

---

## Designer Workflow

Designers can trigger icon rebuilds directly from the browser — no CLI needed.

### Deploy Dashboard

**[gui-beatstars.github.io/beatstars-icons-poc/deploy.html](https://gui-beatstars.github.io/beatstars-icons-poc/deploy.html)**

1. Enter a GitHub Personal Access Token (with `repo` + `workflow` scopes)
2. Click **Trigger Rebuild**
3. Watch the pipeline progress in real-time
4. Once complete, the icon catalog and library are automatically updated

### What happens behind the scenes

The deploy dashboard triggers the **Rebuild Icons** GitHub Actions workflow (`rebuild-icons.yml`), which:

1. Fetches latest icons from Figma
2. Optimizes SVGs
3. Generates React components
4. Builds ESM/CJS bundles
5. Commits updated `dist/`, `src/`, and `web/catalog-data.js` to `main`
6. Deploys the catalog to GitHub Pages

### Figma Requirements

For the pipeline to pick up your icons:

- Icons must be **Figma Components** (not plain groups or frames)
- All icons must be inside the **target frame** (configured via `FIGMA_ICON_FRAME_ID`)
- Component Sets (variants) are supported — each variant becomes a separate icon
- Component names become filenames (e.g. `icon-play-circle` → `icon-play-circle.svg` → `IconPlayCircleIcon`)

---

## GitHub Actions

### `rebuild-icons.yml`

Triggered via `workflow_dispatch` (from the deploy dashboard or GitHub Actions UI).

Runs the full pipeline, commits changes to `main`, and deploys the catalog to GitHub Pages.

Required repository secrets:
- `FIGMA_TOKEN` — Figma Personal Access Token
- `FIGMA_FILE_KEY` — File key from the Figma URL
- `FIGMA_ICON_FRAME_ID` — Node ID of the frame containing icons

### `deploy-catalog.yml`

Triggered on every push to `main`. Builds the catalog data from `dist/svg/` and deploys `web/` to GitHub Pages.

---

## Local Setup

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/gui-beatstars/beatstars-icons-poc.git
cd beatstars-icons-poc
npm install
```

2. Create a `.env` file with your Figma credentials:

```bash
cp .env.example .env
```

```env
FIGMA_TOKEN=your-figma-personal-access-token
FIGMA_FILE_KEY=your-figma-file-key
FIGMA_ICON_FRAME_ID=123:456
```

3. Build everything:

```bash
npm run build
```

---

## Project Structure

```
@beatstars/icons/
├── scripts/
│   ├── fetch-from-figma.mjs        # Pull SVGs from Figma API
│   ├── optimize-svgs.mjs           # Clean/optimize SVGs with SVGO
│   ├── generate-components.mjs     # Generate React/TS icon components
│   ├── build-library.mjs           # Bundle ESM + CJS + types
│   ├── build-catalog-data.mjs      # Build catalog page data
│   └── load-env.mjs                # Load .env for local dev
├── .github/workflows/
│   ├── rebuild-icons.yml            # Full pipeline + deploy (workflow_dispatch)
│   └── deploy-catalog.yml           # Deploy catalog on push to main
├── web/
│   ├── index.html                   # Icon catalog (GitHub Pages)
│   ├── deploy.html                  # Designer deploy dashboard
│   └── catalog-data.js              # Generated catalog data (committed)
├── src/
│   ├── icons/                       # Generated icon components (committed)
│   ├── index.ts                     # Package entry point
│   ├── types.ts                     # TypeScript types (IconProps)
│   └── createIcon.tsx               # Icon factory utility
├── dist/                            # Built library (committed for GitHub installs)
│   ├── esm/                         # ES modules
│   ├── cjs/                         # CommonJS
│   ├── types/                       # TypeScript declarations
│   └── svg/                         # Optimized SVGs
├── svg-raw/                         # Raw SVGs from Figma (gitignored)
├── svg-optimized/                   # SVGO output (gitignored)
├── test-app/                        # Vite + React test app
├── .env.example                     # Environment variable template
├── package.json
├── tsconfig.json
└── README.md
```
