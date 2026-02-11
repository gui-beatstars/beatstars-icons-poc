import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconHelpCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m-8.94 3.34a2 2 0 0 1 .1 1.17L2.02 20.8a1 1 0 0 0 1.24 1.17l3.41-1a2 2 0 0 1 1.1.1 10 10 0 1 0-4.78-4.73"/>
    </svg>
  )
);

BaseIconHelpCircleIcon.displayName = 'BaseIconHelpCircleIcon';

export default BaseIconHelpCircleIcon;
