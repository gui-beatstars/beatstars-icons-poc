import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconHeartIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.11 3C19.63 3 22 6.35 22 9.48 22 15.81 12.18 21 12 21S2 15.81 2 9.48C2 6.35 4.37 3 7.89 3A5.3 5.3 0 0 1 12 4.92 5.3 5.3 0 0 1 16.11 3"/>
    </svg>
  )
);

BaseIconHeartIcon.displayName = 'BaseIconHeartIcon';

export default BaseIconHeartIcon;
