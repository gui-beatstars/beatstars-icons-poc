import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconUnlistedIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h8.5m4 0H20m-5.5 5H20m-7.5 5H20M4 12h7m-3.152 8.664 6.306-17.328M4 17h5"/>
    </svg>
  )
);

IconUnlistedIcon.displayName = 'IconUnlistedIcon';

export default IconUnlistedIcon;
