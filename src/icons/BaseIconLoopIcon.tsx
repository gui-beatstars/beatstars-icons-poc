import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconLoopIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.18 8c5.1 0 5.1 8 0 8S11.04 8 5.44 8c-4.59 0-4.59 8 0 8 5.6 0 7.64-8 12.74-8"/>
    </svg>
  )
);

BaseIconLoopIcon.displayName = 'BaseIconLoopIcon';

export default BaseIconLoopIcon;
