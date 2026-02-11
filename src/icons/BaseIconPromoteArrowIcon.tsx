import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPromoteArrowIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 3.5V2m3.94 2.56L20.5 3.5m.01 5h1.5m-.06 4.5A10 10 0 1 1 11 2.05M12 8h4v4m-.38-4a13 13 0 0 1-13.54 5.17"/>
    </svg>
  )
);

BaseIconPromoteArrowIcon.displayName = 'BaseIconPromoteArrowIcon';

export default BaseIconPromoteArrowIcon;
