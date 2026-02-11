import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGenreElectronicIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 13h-2l-1 3-2.5-6-1.5 7.5L13 5l-2 16L9 8.5l-2 7L5 11l-1 2H2"/>
    </svg>
  )
);

BaseIconGenreElectronicIcon.displayName = 'BaseIconGenreElectronicIcon';

export default BaseIconGenreElectronicIcon;
