import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCategoriesIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeWidth="2" d="M16 6.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/><path stroke="currentColor" strokeWidth="2" d="M10 17.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/><path stroke="currentColor" strokeWidth="2" d="M22 17.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
    </svg>
  )
);

BaseIconCategoriesIcon.displayName = 'BaseIconCategoriesIcon';

export default BaseIconCategoriesIcon;
