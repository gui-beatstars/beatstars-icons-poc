import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconMaximizeIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 8 5-5m0 0h-5m5 0v5M7 16l-5 5m0 0h5m-5 0v-5m0-6V6a3 3 0 0 1 3-3h6.5M22 14v4a3 3 0 0 1-3 3h-6"/>
    </svg>
  )
);

IconMaximizeIcon.displayName = 'IconMaximizeIcon';

export default IconMaximizeIcon;
