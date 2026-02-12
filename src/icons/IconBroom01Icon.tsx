import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconBroom01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 22-1-4m4-4a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 1 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1m14 0H5m14 0 1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233L5 14m3 8 1-4"/>
    </svg>
  )
);

IconBroom01Icon.displayName = 'IconBroom01Icon';

export default IconBroom01Icon;
