import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconBpmIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12.952h4L9 22l6-20 3 11.048L22 13"/>
    </svg>
  )
);

BaseIconBpmIcon.displayName = 'BaseIconBpmIcon';

export default BaseIconBpmIcon;
