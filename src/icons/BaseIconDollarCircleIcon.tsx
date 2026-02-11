import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconDollarCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 14.67A2.33 2.33 0 0 0 10.83 17H13a2.5 2.5 0 0 0 0-5h-2a2.5 2.5 0 0 1 0-5h2.17a2.33 2.33 0 0 1 2.33 2.33M12 5.5V7m0 10v1.5M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"/>
    </svg>
  )
);

BaseIconDollarCircleIcon.displayName = 'BaseIconDollarCircleIcon';

export default BaseIconDollarCircleIcon;
