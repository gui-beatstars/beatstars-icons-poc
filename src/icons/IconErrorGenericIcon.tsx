import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconErrorGenericIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.996 7.998h18.008M9.999 21.004H4.997a2 2 0 0 1-2-2.001V4.997a2 2 0 0 1 2-2h14.006a2 2 0 0 1 2 2V10M18.5 18.788l-3.281-3.281m0 3.28 3.281-3.28M16.998 12a5.002 5.002 0 1 1-3.672 1.61m8.679 3.388a5.002 5.002 0 1 1-1.61-3.672m-9.53-7.834-.005.005.006.005.005-.005zm-2.54 0-.005.005.005.005.005-.005zm-2.549-.005-.005.005.005.005.005-.005z"/>
    </svg>
  )
);

IconErrorGenericIcon.displayName = 'IconErrorGenericIcon';

export default IconErrorGenericIcon;
