import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconEyeVisible01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.42 12.71c-.14-.21-.2-.32-.24-.49a1 1 0 0 1 0-.44c.04-.17.1-.28.24-.5C3.55 9.5 6.9 5 12 5s8.46 4.5 9.58 6.29c.14.21.2.32.24.49.03.12.03.32 0 .44-.04.17-.1.28-.24.5C20.46 14.5 17.11 19 12 19c-5.1 0-8.45-4.5-9.58-6.29"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  )
);

BaseIconEyeVisible01Icon.displayName = 'BaseIconEyeVisible01Icon';

export default BaseIconEyeVisible01Icon;
