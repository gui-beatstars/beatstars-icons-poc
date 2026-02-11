import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconSkipForwardIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 4v16M7.319 18.845l7.454-5.4c.682-.494 1.023-.741 1.146-1.04.108-.26.108-.55 0-.81-.123-.299-.464-.546-1.146-1.04l-7.454-5.4C6.256 4.385 5.725 4 5.279 4c-.39 0-.758.16-1 .435C4 4.75 4 5.367 4 6.6v10.8c0 1.233 0 1.849.279 2.165.242.275.61.435 1 .435.446 0 .977-.385 2.04-1.155"/>
    </svg>
  )
);

BaseIconSkipForwardIcon.displayName = 'BaseIconSkipForwardIcon';

export default BaseIconSkipForwardIcon;
