import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconHashtagIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9.5 3-3 18m11-18-3 18m6-13h-17m16 8h-17"/>
    </svg>
  )
);

BaseIconHashtagIcon.displayName = 'BaseIconHashtagIcon';

export default BaseIconHashtagIcon;
