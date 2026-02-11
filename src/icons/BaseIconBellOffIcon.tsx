import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconBellOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.63 3.03A6 6 0 0 1 18 8c0 2.1.27 3.75.65 5.03M6.25 6.26A6 6 0 0 0 6 8c0 3.09-.78 5.2-1.65 6.6-.73 1.19-1.1 1.78-1.09 1.94.02.18.05.25.2.36.13.1.73.1 1.93.1H17m-7.65 4a4 4 0 0 0 5.3 0M21 21 3 3"/>
    </svg>
  )
);

BaseIconBellOffIcon.displayName = 'BaseIconBellOffIcon';

export default BaseIconBellOffIcon;
