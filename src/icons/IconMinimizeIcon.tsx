import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconMinimizeIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 3-5 5m0 0h5m-5 0V3M2 21l5-5m0 0H2m5 0v5M2 10V6a3 3 0 0 1 3-3h6.5M22 14v4a3 3 0 0 1-3 3h-6"/>
    </svg>
  )
);

IconMinimizeIcon.displayName = 'IconMinimizeIcon';

export default IconMinimizeIcon;
