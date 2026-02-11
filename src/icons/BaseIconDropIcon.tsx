import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconDropIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 14a8 8 0 1 1-15.42-3C5.77 8.07 12 2 12 2s6.23 6.07 7.42 9q.57 1.4.58 3"/>
    </svg>
  )
);

BaseIconDropIcon.displayName = 'BaseIconDropIcon';

export default BaseIconDropIcon;
