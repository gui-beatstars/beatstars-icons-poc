import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMoonIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.39A7.61 7.61 0 1 1 10.61 3 9.52 9.52 0 1 0 21 13.39"/>
    </svg>
  )
);

BaseIconMoonIcon.displayName = 'BaseIconMoonIcon';

export default BaseIconMoonIcon;
