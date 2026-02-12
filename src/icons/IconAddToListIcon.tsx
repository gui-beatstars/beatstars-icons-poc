import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconAddToListIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 5H3m8 7H3m13 7H3M18 9v6m3-3h-6"/>
    </svg>
  )
);

IconAddToListIcon.displayName = 'IconAddToListIcon';

export default IconAddToListIcon;
