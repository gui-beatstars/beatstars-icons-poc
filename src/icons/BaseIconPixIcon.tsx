import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPixIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeWidth="2" d="M8.02 5.25q.88 0 1.51.6l2.18 2.07c.16.15.41.15.57 0l2.18-2.07c.4-.39.94-.6 1.51-.6.1 0 .15-.1.08-.17L13.47 2.6a2.3 2.3 0 0 0-3.12 0L7.9 4.95c-.12.11-.04.3.12.3Zm0 13.5q.88 0 1.51-.6l2.18-2.07a.4.4 0 0 1 .57 0l2.18 2.07c.4.39.94.6 1.51.6.1 0 .15.1.08.17l-2.58 2.47a2.3 2.3 0 0 1-3.12 0L7.9 19.05a.17.17 0 0 1 .12-.3Zm13.2-8.49L19.29 8.5q-.12-.08-.26-.07h-2.19c-.48 0-.95.17-1.28.49l-2.64 2.43a1.34 1.34 0 0 1-1.8 0L8.48 8.9a2 2 0 0 0-1.28-.5H4.97q-.14 0-.24.07l-1.95 1.8a2.33 2.33 0 0 0 0 3.48l1.94 1.78q.1.07.24.06h2.22c.48 0 .95-.17 1.28-.49l2.65-2.44a1.4 1.4 0 0 1 1.8 0l2.65 2.43c.34.31.81.5 1.28.5h2.19q.16 0 .26-.08l1.92-1.77a2.32 2.32 0 0 0 0-3.48Z"/>
    </svg>
  )
);

BaseIconPixIcon.displayName = 'BaseIconPixIcon';

export default BaseIconPixIcon;
