import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconReorderIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7H3m18 10H3m18-5H3"/>
    </svg>
  )
);

BaseIconReorderIcon.displayName = 'BaseIconReorderIcon';

export default BaseIconReorderIcon;
