import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconLoopKitIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.68 9.657 6.016 8 2 12l4.016 4 8.033-8m2.15 6.223L17.984 16 22 12l-4.016-4-8.033 8"/>
    </svg>
  )
);

BaseIconLoopKitIcon.displayName = 'BaseIconLoopKitIcon';

export default BaseIconLoopKitIcon;
