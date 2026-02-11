import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconFileCheckIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12.5V6.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C17.71 2 16.87 2 15.2 2H8.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C4 4.29 4 5.13 4 6.8v10.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33H12m2-11H8m2 4H8m8-8H8m6.5 12 2 2 4.5-4.5"/>
    </svg>
  )
);

BaseIconFileCheckIcon.displayName = 'BaseIconFileCheckIcon';

export default BaseIconFileCheckIcon;
