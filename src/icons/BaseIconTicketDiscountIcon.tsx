import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconTicketDiscountIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 9-6 6M5.2 4h13.6c1.12 0 1.68 0 2.1.22q.58.3.88.87c.22.43.22.99.22 2.11v9.6c0 1.12 0 1.68-.22 2.1a2 2 0 0 1-.87.88c-.43.22-.99.22-2.11.22H5.2c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87C2 18.48 2 17.92 2 16.8v-1.3a3.5 3.5 0 1 0 0-7V7.2c0-1.12 0-1.68.22-2.1a2 2 0 0 1 .87-.88C3.52 4 4.08 4 5.2 4m6.93 5.75a.38.38 0 1 1-.76 0 .38.38 0 0 1 .76 0m4.5 4.5a.38.38 0 1 1-.76 0 .38.38 0 0 1 .76 0"/>
    </svg>
  )
);

BaseIconTicketDiscountIcon.displayName = 'BaseIconTicketDiscountIcon';

export default BaseIconTicketDiscountIcon;
