import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconImage02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.2 21H6.93c-.6 0-.9 0-1.05-.12a.5.5 0 0 1-.17-.42c.01-.18.23-.4.66-.83l8.5-8.5c.4-.4.6-.6.82-.67a1 1 0 0 1 .62 0c.23.08.43.28.82.67L21 15v1.2M16.2 21c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17M16.2 21H7.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C3 18.71 3 17.87 3 16.2V7.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C5.29 3 6.13 3 7.8 3h8.4c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v8.4M10.5 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  )
);

BaseIconImage02Icon.displayName = 'BaseIconImage02Icon';

export default BaseIconImage02Icon;
