import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconReloadRefreshIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 10s2-2.73 3.63-4.36a9 9 0 1 1-2.28 8.86M2 10V4m0 6h6"/>
    </svg>
  )
);

BaseIconReloadRefreshIcon.displayName = 'BaseIconReloadRefreshIcon';

export default BaseIconReloadRefreshIcon;
