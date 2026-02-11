import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconHammer01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H10.41M9.62 9.5l-5.92 5a1.99 1.99 0 1 0 2.75 2.85l5.24-5.76m3.42-4.3 2.2 1.76a1.84 1.84 0 0 1 .16 2.73l-1.68 1.69a1.8 1.8 0 0 1-2.7-.15l-1.78-2.2q-.63-.8-1.42-1.42L7.7 7.94a1.84 1.84 0 0 1-.16-2.72l1.68-1.69a1.8 1.8 0 0 1 2.7.15l1.78 2.2q.63.8 1.42 1.42"/>
    </svg>
  )
);

BaseIconHammer01Icon.displayName = 'BaseIconHammer01Icon';

export default BaseIconHammer01Icon;
