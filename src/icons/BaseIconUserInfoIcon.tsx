import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconUserInfoIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 14.5H8.5c-1.4 0-2.1 0-2.66.17a4 4 0 0 0-2.67 2.67C3 17.9 3 18.6 3 20m14.5-.5V18m0-2.5h.01m-2.01-9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m6.5 11a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"/>
    </svg>
  )
);

BaseIconUserInfoIcon.displayName = 'BaseIconUserInfoIcon';

export default BaseIconUserInfoIcon;
