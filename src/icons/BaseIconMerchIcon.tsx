import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMerchIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 2.02A3 3 0 0 1 12.52 5h-1.04A3 3 0 0 1 8.5 2.02M17.99 13l3.24-.77a1 1 0 0 0 .74-1.21l-1.3-5.19a4 4 0 0 0-2.16-2.64l-1.7-.8A4 4 0 0 0 15.1 2H8.9a4 4 0 0 0-1.71.39l-1.7.8a4 4 0 0 0-2.16 2.64l-1.3 5.19a1 1 0 0 0 .74 1.21L6 13m0-3v8.54c-.01.9.59 1.7 1.45 1.93 3 .7 6.1.7 9.1 0A2 2 0 0 0 18 18.54V10"/>
    </svg>
  )
);

BaseIconMerchIcon.displayName = 'BaseIconMerchIcon';

export default BaseIconMerchIcon;
