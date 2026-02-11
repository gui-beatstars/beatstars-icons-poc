import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconLoadingIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.25v2.5M12 18v4M5.75 12h-3.5m19 0h-1.5m-1.293 6.457-.707-.707m.914-12.334L17.25 6.83M4.922 19.078 7.75 16.25M5.129 5.209 7.25 7.33"/>
    </svg>
  )
);

BaseIconLoadingIcon.displayName = 'BaseIconLoadingIcon';

export default BaseIconLoadingIcon;
