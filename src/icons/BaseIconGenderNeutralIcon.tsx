import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGenderNeutralIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 9h6v6h-1v7h-4v-7H9z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M14 4v2h-4V2h4z"/>
    </svg>
  )
);

BaseIconGenderNeutralIcon.displayName = 'BaseIconGenderNeutralIcon';

export default BaseIconGenderNeutralIcon;
