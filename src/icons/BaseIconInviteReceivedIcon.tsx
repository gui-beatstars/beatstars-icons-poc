import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconInviteReceivedIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3.5v7m0 0L15.5 7M12 10.5 8.5 7M2 12h3.88c.69 0 1.31.39 1.62 1 .3.61.93 1 1.62 1h5.76a1.8 1.8 0 0 0 1.62-1c.3-.61.93-1 1.62-1H22M2 12V8.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C4.29 4 5.13 4 6.8 4M2 12v3.2c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33h10.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V12m0 0V8.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C19.71 4 18.87 4 17.2 4"/>
    </svg>
  )
);

BaseIconInviteReceivedIcon.displayName = 'BaseIconInviteReceivedIcon';

export default BaseIconInviteReceivedIcon;
