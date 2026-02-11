import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCookie01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.73 3.94a2 2 0 0 1-1.78-1.89A10 10 0 1 0 22 12.35a2 2 0 0 1-2.54-1.7 5 5 0 0 1-6.72-6.71M8.5 8.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m7 7a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m7-9a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m-4-4a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m-10 13a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m8-9a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"/>
    </svg>
  )
);

BaseIconCookie01Icon.displayName = 'BaseIconCookie01Icon';

export default BaseIconCookie01Icon;
