import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconLifeBuoyIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.46 8.46 4.93 4.93m0 14.14 3.53-3.53m7.08 0 3.53 3.53m0-14.14-3.53 3.53M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-5 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
    </svg>
  )
);

BaseIconLifeBuoyIcon.displayName = 'BaseIconLifeBuoyIcon';

export default BaseIconLifeBuoyIcon;
