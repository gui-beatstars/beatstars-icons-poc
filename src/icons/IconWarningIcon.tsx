import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconWarningIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 9.023v3.997m0 3.997h.01m9.712 1L13.74 4.026a1.998 1.998 0 0 0-3.478 0l-7.993 13.99a1.999 1.999 0 0 0 1.748 2.997h15.988a2 2 0 0 0 1.728-2.998"/>
    </svg>
  )
);

IconWarningIcon.displayName = 'IconWarningIcon';

export default IconWarningIcon;
