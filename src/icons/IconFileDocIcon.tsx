import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconFileDocIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M18 8l-6-6H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311m4.827-4.189c-1.172 1.48-4 .983-4-1.565 0-2.757 2.828-3.328 4-1.714M5 17h1.333C7.223 17 9 16.5 9 14.5S7.222 12 6.333 12H5zm6.5-2.392c0 3.214 4.5 3.164 4.5 0 0-3.477-4.5-3.477-4.5 0"/>
    </svg>
  )
);

IconFileDocIcon.displayName = 'IconFileDocIcon';

export default IconFileDocIcon;
