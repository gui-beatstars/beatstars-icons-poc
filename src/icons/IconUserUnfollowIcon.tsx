import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconUserUnfollowIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 14.5H8.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C3 17.907 3 18.604 3 20m18-5.5-2.75 2.75m0 0L15.5 20m2.75-2.75L15.5 14.5m2.75 2.75L21 20M15.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"/>
    </svg>
  )
);

IconUserUnfollowIcon.displayName = 'IconUserUnfollowIcon';

export default IconUserUnfollowIcon;
