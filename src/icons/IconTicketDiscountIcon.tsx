import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconTicketDiscountIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.75 9.75h.008m4.492 4.5h.008M17 9l-6 6M5.2 4h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 5.52 22 6.08 22 7.2v9.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 20 19.92 20 18.8 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 18.48 2 17.92 2 16.8v-1.3a3.5 3.5 0 1 0 0-7V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4m6.925 5.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m4.5 4.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"/>
    </svg>
  )
);

IconTicketDiscountIcon.displayName = 'IconTicketDiscountIcon';

export default IconTicketDiscountIcon;
