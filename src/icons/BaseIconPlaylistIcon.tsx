import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPlaylistIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.78 15.33H2m12.22-5.66H2M20.89 4H2m20 7.93-3.33-1.13v7.93m-.65-1.6a2.3 2.3 0 0 1 0 3.2 2.2 2.2 0 0 1-3.15 0 2.3 2.3 0 0 1 0-3.2 2.2 2.2 0 0 1 3.15 0"/>
    </svg>
  )
);

BaseIconPlaylistIcon.displayName = 'BaseIconPlaylistIcon';

export default BaseIconPlaylistIcon;
