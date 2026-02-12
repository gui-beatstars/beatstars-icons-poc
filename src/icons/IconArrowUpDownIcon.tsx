import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconArrowUpDownIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 16-4 4m0 0-4-4m4 4V4M3 8l4-4m0 0 4 4M7 4v16"/>
    </svg>
  )
);

IconArrowUpDownIcon.displayName = 'IconArrowUpDownIcon';

export default IconArrowUpDownIcon;
