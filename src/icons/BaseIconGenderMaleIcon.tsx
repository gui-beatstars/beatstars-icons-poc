import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGenderMaleIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 9h6v6h-1l-1 7h-2l-1-7H9z"/>
    </svg>
  )
);

BaseIconGenderMaleIcon.displayName = 'BaseIconGenderMaleIcon';

export default BaseIconGenderMaleIcon;
