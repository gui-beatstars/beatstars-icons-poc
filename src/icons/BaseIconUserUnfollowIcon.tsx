import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconUserUnfollowIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path fill="currentColor" d="M11 15.5a1 1 0 1 0 0-2zm-5.16-.83.29.96zM2 20a1 1 0 1 0 2 0zm1.17-2.66.96.29zm18.54-2.13a1 1 0 0 0-1.42-1.42l.71.71zm-6.92 4.08a1 1 0 0 0 1.42 1.42L15.5 20zm1.42-5.5a1 1 0 0 0-1.42 1.42l.71-.71zm4.08 6.92a1 1 0 0 0 1.42-1.42L21 20zM8.5 14.5v1H11v-2H8.5zm0 0v-1c-1.32 0-2.2-.01-2.95.22l.29.95.29.96c.39-.12.9-.13 2.37-.13zM3 20h1c0-1.47.01-1.98.13-2.37l-.96-.3-.95-.28C1.99 17.79 2 18.68 2 20zm2.84-5.33-.3-.95a5 5 0 0 0-3.32 3.33l.95.29.96.29a3 3 0 0 1 2-2zM15.5 6.5h-1A3.5 3.5 0 0 1 11 10v2a5.5 5.5 0 0 0 5.5-5.5zM11 11v-1a3.5 3.5 0 0 1-3.5-3.5h-2A5.5 5.5 0 0 0 11 12zM6.5 6.5h1A3.5 3.5 0 0 1 11 3V1a5.5 5.5 0 0 0-5.5 5.5zM11 2v1a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 11 1zm10 12.5-.7-.7-2.76 2.74.71.71.7.7 2.76-2.74zm-2.75 2.75-.7-.7-2.76 2.74.71.71.7.7 2.76-2.74zm0 0 .7-.7-2.74-2.76-.71.71-.7.7 2.74 2.76zm0 0-.7.7 2.74 2.76L21 20l.7-.7-2.74-2.76z"/>
    </svg>
  )
);

BaseIconUserUnfollowIcon.displayName = 'BaseIconUserUnfollowIcon';

export default BaseIconUserUnfollowIcon;
