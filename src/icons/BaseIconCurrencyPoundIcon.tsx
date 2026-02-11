import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCurrencyPoundIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 20.5h-11s3.5-2.76 3.5-7c0-2.83-2.09-3.84-2.12-6.2 0-4.66 5.62-4.41 7.57-2.56M6.5 13.5H15"/>
    </svg>
  )
);

BaseIconCurrencyPoundIcon.displayName = 'BaseIconCurrencyPoundIcon';

export default BaseIconCurrencyPoundIcon;
