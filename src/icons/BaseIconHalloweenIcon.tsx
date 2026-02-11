import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconHalloweenIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth, className, style, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={style}
      {...rest}
    >
      <path fill="currentColor" d="M15 4a1 1 0 1 0 0-2zm-3 .5h-1zM8.5 7v1h7V6h-7zm7 0v1a5.5 5.5 0 0 1 5.5 5.5h2A7.5 7.5 0 0 0 15.5 6zm6.5 6.5h-1a5.5 5.5 0 0 1-5.5 5.5v2a7.5 7.5 0 0 0 7.5-7.5zM15.5 20v-1h-7v2h7zm-7 0v-1A5.5 5.5 0 0 1 3 13.5H1A7.5 7.5 0 0 0 8.5 21zM2 13.5h1A5.5 5.5 0 0 1 8.5 8V6A7.5 7.5 0 0 0 1 13.5zm14 0h-1c0 1.64-.41 3.08-1.02 4.07C13.35 18.58 12.63 19 12 19v2c1.58 0 2.85-1.04 3.68-2.38A10 10 0 0 0 17 13.5zM12 20v-1c-.63 0-1.35-.42-1.98-1.43A8 8 0 0 1 9 13.5H7a10 10 0 0 0 1.32 5.12C9.15 19.96 10.42 21 12 21zm-4-6.5h1c0-1.64.41-3.08 1.02-4.07C10.65 8.42 11.37 8 12 8V6c-1.58 0-2.85 1.04-3.68 2.38A10 10 0 0 0 7 13.5zM12 7v1c.63 0 1.35.42 1.98 1.43.6 1 1.02 2.43 1.02 4.07h2a10 10 0 0 0-1.32-5.12C14.85 7.04 13.58 6 12 6zm3-4V2h-1.5v2H15zm-1.5 0V2c-.66 0-1.3.26-1.77.73l.7.7.72.72A.5.5 0 0 1 13.5 4zm-1.06.44-.7-.7A2.5 2.5 0 0 0 11 4.5h2a.5.5 0 0 1 .15-.35zM12 4.5h-1V7h2V4.5z"/>
    </svg>
  )
);

BaseIconHalloweenIcon.displayName = 'BaseIconHalloweenIcon';

export default BaseIconHalloweenIcon;
