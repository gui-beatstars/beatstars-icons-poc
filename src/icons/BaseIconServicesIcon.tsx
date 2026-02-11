import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconServicesIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3.24 16.83 3.4-3.4c-.1-.3-.28-1.16-.16-2.11a5.6 5.6 0 0 1 3.83-4.6 5.3 5.3 0 0 1 3.36 0 .56.56 0 0 1 .2.92l-3.11 3.12 2.48 2.48 3.12-3.12a.56.56 0 0 1 .92.21 5.55 5.55 0 0 1-6.48 7.1l-.23-.07-3.4 3.4m11.9-1.69A10 10 0 1 1 4.93 4.93a10 10 0 0 1 14.14 14.14"/>
    </svg>
  )
);

BaseIconServicesIcon.displayName = 'BaseIconServicesIcon';

export default BaseIconServicesIcon;
