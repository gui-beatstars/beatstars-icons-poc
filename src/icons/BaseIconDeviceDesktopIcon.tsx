import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconDeviceDesktopIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.73 16.44V20m0 0H9.27m5.46 0h.9m-6.36 0v-3.56m0 3.56h-.9m-2.55-3.56h12.36c1.02 0 2.44 0 2.83-.19q.52-.26.8-.78c.19-.38.19-.87.19-1.87V6.84c0-1 0-1.49-.2-1.87a2 2 0 0 0-.8-.78C20.63 4 19.2 4 18.19 4H5.82c-1.02 0-2.44 0-2.83.2a2 2 0 0 0-.8.77C2 5.35 2 5.85 2 6.84v6.76c0 1 0 1.5.2 1.87q.27.52.8.78c.38.2 1.8.2 2.82.2"/>
    </svg>
  )
);

BaseIconDeviceDesktopIcon.displayName = 'BaseIconDeviceDesktopIcon';

export default BaseIconDeviceDesktopIcon;
