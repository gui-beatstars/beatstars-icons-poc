import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconSliders03Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10V3M5 12V3m16 11h-4M7 16H3m9 5v-9m-7 9v-5m14 5v-7m-5-6h-4m2 0V3"/>
    </svg>
  )
);

IconSliders03Icon.displayName = 'IconSliders03Icon';

export default IconSliders03Icon;
