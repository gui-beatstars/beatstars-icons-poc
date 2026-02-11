import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconUsers02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 19v-1.1a2.5 2.5 0 0 0-2.5-2.5h-.8M1 19v-1.1a2.5 2.5 0 0 1 2.5-2.5h.8M17.34 19v-1.6a3.5 3.5 0 0 0-3.5-3.5h-3.68a3.5 3.5 0 0 0-3.5 3.5V19m14.13-9.48a2.02 2.02 0 1 1-2.86 2.86 2.02 2.02 0 0 1 2.86-2.86m-6.59-3.6a3.11 3.11 0 1 1-4.4 4.4 3.11 3.11 0 0 1 4.4-4.4m-8.13 3.6a2.02 2.02 0 1 1-2.86 2.86 2.02 2.02 0 0 1 2.86-2.86"/>
    </svg>
  )
);

BaseIconUsers02Icon.displayName = 'BaseIconUsers02Icon';

export default BaseIconUsers02Icon;
