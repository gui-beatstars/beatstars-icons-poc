import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCurrencyEthereumIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 11 8 2 8-2M4 11l8-9m-8 9 8-2m8 2-8-9m8 9-8-2m0-7v7m-6.5 6 6.5 7 6.5-7-6.5 1.5z"/>
    </svg>
  )
);

BaseIconCurrencyEthereumIcon.displayName = 'BaseIconCurrencyEthereumIcon';

export default BaseIconCurrencyEthereumIcon;
