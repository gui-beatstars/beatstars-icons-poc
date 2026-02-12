import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconTransaction01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 15H4l4 4M4 9h16l-4-4"/>
    </svg>
  )
);

IconTransaction01Icon.displayName = 'IconTransaction01Icon';

export default IconTransaction01Icon;
