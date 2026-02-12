import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconToggleOnIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12a6 6 0 0 1-6 6H8A6 6 0 0 1 8 6h8a6 6 0 0 1 6 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"/>
    </svg>
  )
);

IconToggleOnIcon.displayName = 'IconToggleOnIcon';

export default IconToggleOnIcon;
