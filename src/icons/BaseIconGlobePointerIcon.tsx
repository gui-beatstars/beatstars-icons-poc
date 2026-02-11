import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGlobePointerIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2.69 14.65 1.9-1.1a.5.5 0 0 1 .35-.06l3.75.7a.5.5 0 0 0 .6-.5l-.02-3.29.07-.25 1.9-3.24a.5.5 0 0 0-.03-.54L8 1.83m11 2.03C13.5 6.5 16.5 10 17.5 10.5c1.88.94 4.49 1 4.49 1L22 11a10 10 0 1 0-9.5 9.99m4.26-.05-3.17-8.35 8.35 3.17-3.7 1.48z"/>
    </svg>
  )
);

BaseIconGlobePointerIcon.displayName = 'BaseIconGlobePointerIcon';

export default BaseIconGlobePointerIcon;
