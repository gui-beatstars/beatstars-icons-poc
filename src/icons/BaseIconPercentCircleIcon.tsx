import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPercentCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 8-8 8m1.5-7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m6 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m6.5-3a10 10 0 1 1-20 0 10 10 0 0 1 20 0"/>
    </svg>
  )
);

BaseIconPercentCircleIcon.displayName = 'BaseIconPercentCircleIcon';

export default BaseIconPercentCircleIcon;
