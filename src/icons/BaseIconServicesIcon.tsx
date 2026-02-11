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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3.242 16.83 3.396-3.396c-.103-.31-.277-1.165-.154-2.118a5.61 5.61 0 0 1 3.825-4.599 5.3 5.3 0 0 1 3.36 0 .556.556 0 0 1 .21.923l-3.12 3.12 2.485 2.484 3.119-3.12a.556.556 0 0 1 .92.207 5.3 5.3 0 0 1-.003 3.357 5.55 5.55 0 0 1-6.48 3.738l-.235-.063-3.395 3.395m11.901-1.687c-3.905 3.905-10.237 3.905-14.142 0s-3.905-10.237 0-14.142 10.237-3.905 14.142 0 3.905 10.237 0 14.142"/>
    </svg>
  )
);

BaseIconServicesIcon.displayName = 'BaseIconServicesIcon';

export default BaseIconServicesIcon;
