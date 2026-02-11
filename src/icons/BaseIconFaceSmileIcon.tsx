import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconFaceSmileIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14s1.5 2 4 2 4-2 4-2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-6.5-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
    </svg>
  )
);

BaseIconFaceSmileIcon.displayName = 'BaseIconFaceSmileIcon';

export default BaseIconFaceSmileIcon;
