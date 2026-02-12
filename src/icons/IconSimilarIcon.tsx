import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconSimilarIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.343-4.343m0 0-.007-.007m.007.007A8 8 0 1 0 5.19 5.5m11.466 11.157A7.98 7.98 0 0 1 11 19a7.96 7.96 0 0 1-4.665-1.5M6 10v3M3 8v8m9-6v3M9 7v8"/>
    </svg>
  )
);

IconSimilarIcon.displayName = 'IconSimilarIcon';

export default IconSimilarIcon;
