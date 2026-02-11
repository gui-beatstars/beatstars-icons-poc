import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconBlockedIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0M19.07 4.93c-3.905-3.905-10.237-3.905-14.142 0s-3.905 10.237 0 14.142M19.07 4.93 4.93 19.07"/>
    </svg>
  )
);

BaseIconBlockedIcon.displayName = 'BaseIconBlockedIcon';

export default BaseIconBlockedIcon;
