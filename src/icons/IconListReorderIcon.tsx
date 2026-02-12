import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconListReorderIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.88 6H4m8.925 6H4m15.88 6H4m16-3.757L16.902 12 20 10"/>
    </svg>
  )
);

IconListReorderIcon.displayName = 'IconListReorderIcon';

export default IconListReorderIcon;
