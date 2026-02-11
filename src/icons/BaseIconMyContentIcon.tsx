import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMyContentIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 19.5v-15m4.5 15v-15m4.5 15v-15l6 3v12z"/>
    </svg>
  )
);

BaseIconMyContentIcon.displayName = 'BaseIconMyContentIcon';

export default BaseIconMyContentIcon;
