import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconLayersIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 12 9.64 4.82q.18.1.27.11h.18q.09-.01.27-.1L22 12M2 17l9.64 4.82q.18.1.27.11h.18q.09-.01.27-.1L22 17M2 7l9.64-4.82q.18-.1.27-.11h.18q.09.01.27.1L22 7l-9.64 4.82q-.18.1-.27.11h-.18q-.09-.01-.27-.1z"/>
    </svg>
  )
);

BaseIconLayersIcon.displayName = 'BaseIconLayersIcon';

export default BaseIconLayersIcon;
