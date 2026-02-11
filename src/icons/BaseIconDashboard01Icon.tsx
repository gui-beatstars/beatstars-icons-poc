import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconDashboard01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12a10 10 0 0 1-20 0m20 0A10 10 0 0 0 12 2m10 10h-2.5M2 12A10 10 0 0 1 12 2M2 12h2.5M12 2v2.5m7.08.5-5.58 5.5m5.58 8.58-.2-.2a9 9 0 0 0-1.45-1.3 4 4 0 0 0-1.15-.47c-.46-.11-.95-.11-1.93-.11h-4.7c-.98 0-1.47 0-1.93.11a4 4 0 0 0-1.15.48c-.4.25-.75.6-1.44 1.28l-.2.2M4.92 5l1.73 1.74M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  )
);

BaseIconDashboard01Icon.displayName = 'BaseIconDashboard01Icon';

export default BaseIconDashboard01Icon;
