# @beatstars/icons

BeatStars icon library — auto-generated from Figma, consumed like Lucide.

## Quick Start (for devs consuming icons)

```bash
npm install @beatstars/icons
```

```tsx
import { PlayIcon, BeatIcon, TrackIcon } from '@beatstars/icons';

function Player() {
  return (
    <div>
      <PlayIcon size={24} color="currentColor" />
      <BeatIcon size={32} color="#FF5500" />
      <TrackIcon size={16} />
    </div>
  );
}
```

### Props

Every icon component accepts these props (plus all standard SVG attributes):

| Prop          | Type               | Default          | Description                    |
|---------------|--------------------|------------------|--------------------------------|
| `size`        | `number \| string` | `24`             | Width and height in pixels     |
| `color`       | `string`           | `'currentColor'` | Icon color (any CSS color)     |
| `strokeWidth` | `number \| string` | SVG default      | Stroke width for line icons    |
| `className`   | `string`           | —                | CSS class name                 |
| `style`       | `CSSProperties`    | —                | Inline styles                  |

Icons also accept a `ref` (forwarded to the `<svg>` element).

### Tree Shaking

The library is tree-shakeable. Only the icons you import get bundled.

```tsx
// ✅ Only PlayIcon ends up in your bundle
import { PlayIcon } from '@beatstars/icons';

// ✅ Also works — direct import for maximum tree-shaking
import PlayIcon from '@beatstars/icons/dist/esm/icons/PlayIcon';
```

---

## Browsing Icons

Run the local catalog to search and preview all available icons:

```bash
npm run dev:catalog
# Opens at http://localhost:3333
```

---

## How It Works (for maintainers)

The entire library is auto-generated from a Figma file through this pipeline:

```
Figma Components → Figma API → Raw SVGs → SVGO → React Components → npm package
```

### Pipeline Steps

1. **`npm run fetch`** — Pulls SVGs from Figma via the REST API
2. **`npm run optimize`** — Cleans and optimizes SVGs with SVGO
3. **`npm run generate`** — Converts SVGs to React/TypeScript components
4. **`npm run build:lib`** — Bundles for ESM + CJS distribution
5. **`npm run build:catalog-data`** — Builds the icon catalog web page data

Or run everything at once:

```bash
npm run build
```

### Initial Setup

1. Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

2. You need three values:
   - **`FIGMA_TOKEN`** — Your Figma Personal Access Token ([get one here](https://www.figma.com/developers/api#access-tokens))
   - **`FIGMA_FILE_KEY`** — The key from your Figma file URL (e.g. `figma.com/design/THIS_PART/...`)
   - **`FIGMA_ICON_FRAME_ID`** — The node ID of the frame containing your icons. Select it in Figma → right-click → "Copy link" → grab the `node-id` parameter

3. Install dependencies and build:

```bash
npm install
npm run build
```

### Figma File Structure

For the fetch script to work, your Figma icons should be:

- **Figma Components** (not plain groups or frames) — the script looks for component nodes
- **Inside a single parent frame** — this is what `FIGMA_ICON_FRAME_ID` points to
- **Optionally organized in Component Sets** (variants) — the script handles these too

Recommended naming convention in Figma:
```
icon/play
icon/pause
icon/beat-maker
icon/track-list
```

### Updating Icons

When designers update icons in Figma:

```bash
npm run build    # Re-fetches from Figma and rebuilds everything
npm version patch
npm publish
```

Or set up CI to do this automatically (see below).

### CI/CD Automation (Optional)

You can automate the whole pipeline with GitHub Actions:

```yaml
# .github/workflows/publish-icons.yml
name: Publish Icons
on:
  workflow_dispatch:     # Manual trigger
  schedule:
    - cron: '0 9 * * 1' # Weekly on Monday

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://npm.pkg.github.com  # or https://registry.npmjs.org
      - run: npm ci
      - run: npm run build
        env:
          FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
          FIGMA_FILE_KEY: ${{ secrets.FIGMA_FILE_KEY }}
          FIGMA_ICON_FRAME_ID: ${{ secrets.FIGMA_ICON_FRAME_ID }}
      - run: |
          git diff --quiet || (
            npm version patch --no-git-tag-version
            git config user.name "github-actions"
            git config user.email "actions@github.com"
            git add -A
            git commit -m "chore: update icons from Figma"
            git push
            npm publish
          )
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

This will:
- Run weekly (or on manual trigger)
- Fetch latest icons from Figma
- Only publish if icons actually changed
- Auto-bump the patch version

---

## Project Structure

```
@beatstars/icons/
├── scripts/
│   ├── fetch-from-figma.mjs      # Step 1: Pull SVGs from Figma API
│   ├── optimize-svgs.mjs         # Step 2: Clean SVGs with SVGO
│   ├── generate-components.mjs   # Step 3: Generate React components
│   ├── build-library.mjs         # Step 4: Bundle for distribution
│   └── build-catalog-data.mjs    # Step 5: Build catalog page data
├── svg-raw/                       # Raw SVGs from Figma (gitignored)
├── svg-optimized/                 # Optimized SVGs (gitignored)
├── src/
│   ├── icons/                     # Generated icon components (gitignored)
│   ├── types.ts                   # TypeScript types
│   ├── createIcon.tsx             # Icon factory utility
│   └── index.ts                   # Package entry point
├── web/
│   ├── index.html                 # Icon catalog web page
│   └── catalog-data.js            # Generated catalog data
├── dist/                          # Built library (gitignored)
├── .env.example                   # Environment variable template
├── package.json
├── tsconfig.json
└── README.md
```
