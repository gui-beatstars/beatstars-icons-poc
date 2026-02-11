import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMarerPinIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 14.29c-1.85.81-3 1.95-3 3.21C2 19.99 6.48 22 12 22s10-2.01 10-4.5c0-1.26-1.15-2.4-3-3.21M18 8c0 4.06-4.5 6-6 9-1.5-3-6-4.94-6-9a6 6 0 1 1 12 0m-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  )
);

BaseIconMarerPinIcon.displayName = 'BaseIconMarerPinIcon';

export default BaseIconMarerPinIcon;
