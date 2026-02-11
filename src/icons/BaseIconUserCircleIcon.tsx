import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconUserCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.32 19.44A4 4 0 0 1 9 17h6a4 4 0 0 1 3.68 2.44M16 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m6 2.5a10 10 0 1 1-20 0 10 10 0 0 1 20 0"/>
    </svg>
  )
);

BaseIconUserCircleIcon.displayName = 'BaseIconUserCircleIcon';

export default BaseIconUserCircleIcon;
