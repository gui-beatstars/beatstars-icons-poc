import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconHalloweenIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7c-2.21 0-4 2.91-4 6.5S9.79 20 12 20s4-2.91 4-6.5S14.21 7 12 7m0 0V4.5A1.5 1.5 0 0 1 13.5 3H15M8.5 7h7a6.5 6.5 0 1 1 0 13h-7a6.5 6.5 0 1 1 0-13"/>
    </svg>
  )
);

IconHalloweenIcon.displayName = 'IconHalloweenIcon';

export default IconHalloweenIcon;
