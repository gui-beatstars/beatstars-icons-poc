import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGlobe02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10m0-20a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10m0-20a10 10 0 1 0 0 20m0-20a10 10 0 0 1 0 20M2.5 9h19m-19 6h19"/>
    </svg>
  )
);

BaseIconGlobe02Icon.displayName = 'BaseIconGlobe02Icon';

export default BaseIconGlobe02Icon;
