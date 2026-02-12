import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconCurrencyEuroIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 5.519a8.5 8.5 0 1 0 0 12.962M3 14h10M3 10h10"/>
    </svg>
  )
);

IconCurrencyEuroIcon.displayName = 'IconCurrencyEuroIcon';

export default IconCurrencyEuroIcon;
