import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconUsers01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 21v-2a4 4 0 0 0-3-3.87M15.5 3.29a4 4 0 0 1 0 7.42M17 21c0-1.86 0-2.8-.3-3.53a4 4 0 0 0-2.17-2.17C13.8 15 12.86 15 11 15H8c-1.86 0-2.8 0-3.53.3a4 4 0 0 0-2.17 2.17C2 18.2 2 19.14 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </svg>
  )
);

BaseIconUsers01Icon.displayName = 'BaseIconUsers01Icon';

export default BaseIconUsers01Icon;
