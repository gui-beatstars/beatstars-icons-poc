import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPlayerPlayIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 5.09c0-.957 0-1.436.2-1.7a1 1 0 0 1 .727-.389c.33-.02.73.246 1.526.777l10.37 6.91c.658.438.987.658 1.102.934.1.242.1.514 0 .756-.115.276-.444.495-1.103.934l-10.369 6.91c-.797.531-1.195.797-1.526.777a1 1 0 0 1-.727-.39c-.2-.263-.2-.742-.2-1.699z"/>
    </svg>
  )
);

BaseIconPlayerPlayIcon.displayName = 'BaseIconPlayerPlayIcon';

export default BaseIconPlayerPlayIcon;
