import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconGauge02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.621 2.679a10 10 0 1 0 5.7 5.7m-7.9 2.2 5.6-5.6m-5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  )
);

IconGauge02Icon.displayName = 'IconGauge02Icon';

export default IconGauge02Icon;
