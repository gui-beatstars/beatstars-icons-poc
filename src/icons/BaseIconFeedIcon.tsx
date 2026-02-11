import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconFeedIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.5 8.97c0-.48 0-.72.1-.85a.5.5 0 0 1 .36-.2c.17-.01.37.11.77.37l4.72 3.04c.35.22.53.33.59.48a.5.5 0 0 1 0 .38c-.06.15-.24.26-.59.48l-4.72 3.04c-.4.26-.6.38-.77.37a.5.5 0 0 1-.36-.2c-.1-.13-.1-.37-.1-.85z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C5.29 3 6.13 3 7.8 3h8.4c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v8.4c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H7.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C3 18.71 3 17.87 3 16.2z"/>
    </svg>
  )
);

BaseIconFeedIcon.displayName = 'BaseIconFeedIcon';

export default BaseIconFeedIcon;
