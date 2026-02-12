import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconLyrics01Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth, className, style, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className={className}
      style={style}
      {...rest}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 18.897-1 1.15c-.53.61-1.25.953-2 .953s-1.47-.343-2-.953c-.53-.608-1.25-.95-2-.95s-1.469.342-2 .95M3 21h1.675c.489 0 .733 0 .963-.058q.309-.079.579-.252c.201-.13.374-.312.72-.675L19.5 6.807a2.31 2.31 0 0 0 0-3.154 2.05 2.05 0 0 0-3 0L3.937 16.861c-.346.363-.519.545-.642.757q-.165.285-.24.608C3 18.468 3 18.726 3 19.24z"/>
    </svg>
  )
);

IconLyrics01Icon.displayName = 'IconLyrics01Icon';

export default IconLyrics01Icon;
