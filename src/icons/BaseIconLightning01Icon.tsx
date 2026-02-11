import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconLightning01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.25 2H8.49q-.25 0-.34.03l-.2.11q-.07.08-.17.3l-4.2 8.4c-.2.39-.29.58-.27.73q.04.21.21.34c.13.09.35.09.77.09h6.2L7.5 22 19.7 9.36c.4-.43.61-.64.62-.83a.5.5 0 0 0-.17-.41C20 8 19.7 8 19.12 8H12z"/>
    </svg>
  )
);

BaseIconLightning01Icon.displayName = 'BaseIconLightning01Icon';

export default BaseIconLightning01Icon;
