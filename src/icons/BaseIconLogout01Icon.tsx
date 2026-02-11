import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconLogout01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 17 5-5m0 0-5-5m5 5H9m3 5c0 .93 0 1.4-.1 1.78a3 3 0 0 1-2.12 2.12c-.39.1-.85.1-1.78.1h-.5c-1.4 0-2.1 0-2.65-.23a3 3 0 0 1-1.62-1.62C3 18.6 3 17.9 3 16.5v-9c0-1.4 0-2.1.23-2.65a3 3 0 0 1 1.62-1.62C5.4 3 6.1 3 7.5 3H8c.93 0 1.4 0 1.78.1a3 3 0 0 1 2.12 2.12c.1.39.1.85.1 1.78"/>
    </svg>
  )
);

BaseIconLogout01Icon.displayName = 'BaseIconLogout01Icon';

export default BaseIconLogout01Icon;
