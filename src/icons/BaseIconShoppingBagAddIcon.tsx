import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconShoppingBagAddIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h8M8 6c-1.3.002-1.995.024-2.554.29a3 3 0 0 0-1.292 1.176c-.346.581-.418 1.35-.562 2.886l-.6 6.4c-.17 1.82-.256 2.73.046 3.432a3 3 0 0 0 1.32 1.45C5.03 22 5.944 22 7.771 22h4.23M8 6v3m0-3a4 4 0 1 1 8 0m0 0c1.3.002 1.994.024 2.554.29a3 3 0 0 1 1.292 1.176c.345.581.417 1.35.561 2.886l.3 3.2M16 6v3m2 7v3m0 0v3m0-3h-3m3 0h3"/>
    </svg>
  )
);

BaseIconShoppingBagAddIcon.displayName = 'BaseIconShoppingBagAddIcon';

export default BaseIconShoppingBagAddIcon;
