import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGenderFemaleIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M14 4v2h-4V4a2 2 0 1 1 4 0Z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 9h4l2 8.5h-2V22h-4v-4.5H8z"/>
    </svg>
  )
);

BaseIconGenderFemaleIcon.displayName = 'BaseIconGenderFemaleIcon';

export default BaseIconGenderFemaleIcon;
