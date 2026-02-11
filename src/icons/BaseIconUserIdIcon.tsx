import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconUserIdIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11h4m-1 3.5h-3m-3 3.54a3.1 3.1 0 0 0-2.87-1.95H7.87A3.1 3.1 0 0 0 5 18.04M10 5H4.04C2.91 5 2 5.91 2 7.04V19c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-6m-4.09 5.18A2 2 0 1 1 7.1 13a2 2 0 0 1 2.82-2.83M13 7h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1"/>
    </svg>
  )
);

BaseIconUserIdIcon.displayName = 'BaseIconUserIdIcon';

export default BaseIconUserIdIcon;
