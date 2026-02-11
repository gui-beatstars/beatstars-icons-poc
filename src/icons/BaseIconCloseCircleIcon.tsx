import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCloseCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m7-3a10 10 0 1 1-20 0 10 10 0 0 1 20 0"/>
    </svg>
  )
);

BaseIconCloseCircleIcon.displayName = 'BaseIconCloseCircleIcon';

export default BaseIconCloseCircleIcon;
