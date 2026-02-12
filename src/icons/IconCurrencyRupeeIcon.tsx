import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconCurrencyRupeeIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3h12M6 8h12m-3.5 13L6 13h3c6.667 0 6.667-10 0-10"/>
    </svg>
  )
);

IconCurrencyRupeeIcon.displayName = 'IconCurrencyRupeeIcon';

export default IconCurrencyRupeeIcon;
