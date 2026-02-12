import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconElipsisVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
    </svg>
  )
);

IconElipsisVerticalIcon.displayName = 'IconElipsisVerticalIcon';

export default IconElipsisVerticalIcon;
