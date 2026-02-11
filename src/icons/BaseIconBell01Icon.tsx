import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconBell01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.35 21a4 4 0 0 0 5.3 0M18 8A6 6 0 1 0 6 8c0 3.09-.78 5.2-1.65 6.6-.73 1.19-1.1 1.78-1.09 1.94.02.18.05.25.2.36.13.1.73.1 1.93.1H18.6c1.2 0 1.8 0 1.93-.1.15-.1.18-.18.2-.36.01-.16-.36-.75-1.09-1.93A12.4 12.4 0 0 1 18 8"/>
    </svg>
  )
);

BaseIconBell01Icon.displayName = 'BaseIconBell01Icon';

export default BaseIconBell01Icon;
