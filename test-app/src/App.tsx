import {
  BaseIconSearchIcon,
  BaseIconHeartIcon,
  BaseIconHomeIcon,
  BaseIconSettingsIcon,
  BaseIconPlayerPlayIcon,
  BaseIconMusicNote01Icon,
  BaseIconBell01Icon,
  BaseIconUser01Icon,
  BaseIconCart01Icon,
  BaseIconStarIcon,
} from '@beatstars/icons'
import type { IconProps } from '@beatstars/icons'

const sizes: { label: string; size: number }[] = [
  { label: 'XS (8)', size: 8 },
  { label: 'SM (12)', size: 12 },
  { label: 'MD (16)', size: 16 },
  { label: 'LG (24)', size: 24 },
  { label: 'XL (32)', size: 32 },
  { label: 'XXL (40)', size: 40 },
  { label: 'XXXL (64)', size: 64 },
]

const icons: { name: string; component: React.FC<IconProps> }[] = [
  { name: 'Search', component: BaseIconSearchIcon },
  { name: 'Heart', component: BaseIconHeartIcon },
  { name: 'Home', component: BaseIconHomeIcon },
  { name: 'Settings', component: BaseIconSettingsIcon },
  { name: 'Play', component: BaseIconPlayerPlayIcon },
  { name: 'Music Note', component: BaseIconMusicNote01Icon },
  { name: 'Bell', component: BaseIconBell01Icon },
  { name: 'User', component: BaseIconUser01Icon },
  { name: 'Cart', component: BaseIconCart01Icon },
  { name: 'Star', component: BaseIconStarIcon },
]

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#09090b', color: '#fafafa', minHeight: '100vh', padding: 40 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>BeatStars Icons - Test App</h1>
      <p style={{ color: '#a1a1aa', marginBottom: 40 }}>
        Testing imports from <code style={{ color: '#C32D2D' }}>@beatstars/icons</code>
      </p>

      {/* Default size rendering */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#a1a1aa' }}>Default (24px)</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {icons.map(({ name, component: Icon }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Icon />
              <span style={{ fontSize: 11, color: '#71717a' }}>{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Size comparison */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#a1a1aa' }}>Size Comparison (Heart icon)</h2>
        <div style={{ display: 'flex', gap: 32, alignItems: 'end', flexWrap: 'wrap' }}>
          {sizes.map(({ label, size }) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <BaseIconHeartIcon size={size} />
              <span style={{ fontSize: 11, color: '#71717a' }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Color customization */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#a1a1aa' }}>Color Customization</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <BaseIconStarIcon size={32} color="#C32D2D" />
          <BaseIconStarIcon size={32} color="#22c55e" />
          <BaseIconStarIcon size={32} color="#3b82f6" />
          <BaseIconStarIcon size={32} color="#eab308" />
          <BaseIconStarIcon size={32} color="#a855f7" />
          <BaseIconStarIcon size={32} color="#f97316" />
        </div>
      </section>

      {/* TypeScript check */}
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#a1a1aa' }}>TypeScript Checks</h2>
        <p style={{ color: '#22c55e', fontSize: 14 }}>
          If this page renders without errors, the following work correctly:
        </p>
        <ul style={{ color: '#a1a1aa', fontSize: 14, marginTop: 8, paddingLeft: 20, lineHeight: 2 }}>
          <li>Named imports from <code>@beatstars/icons</code></li>
          <li>Type import: <code>IconProps</code></li>
          <li><code>size</code> prop</li>
          <li><code>color</code> prop</li>
          <li>Default rendering (no props)</li>
          <li>Component type compatibility with <code>React.FC&lt;IconProps&gt;</code></li>
        </ul>
      </section>
    </div>
  )
}
