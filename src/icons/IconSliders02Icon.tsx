import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconSliders02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-6 8h12M9 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    </svg>
  )
);

IconSliders02Icon.displayName = 'IconSliders02Icon';

export default IconSliders02Icon;
