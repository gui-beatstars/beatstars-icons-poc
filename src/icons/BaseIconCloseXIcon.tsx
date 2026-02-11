import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCloseXIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
    </svg>
  )
);

BaseIconCloseXIcon.displayName = 'BaseIconCloseXIcon';

export default BaseIconCloseXIcon;
