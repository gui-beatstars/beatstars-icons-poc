import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconRepeatOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 6c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C20 8.605 20 9.07 20 10v4.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 19 16.88 19 15.2 19H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 16.72 4 15.88 4 14.2V10c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C6.605 6 7.07 6 8 6h4m0 0L9 3m3 3L9 9"/>
    </svg>
  )
);

IconRepeatOffIcon.displayName = 'IconRepeatOffIcon';

export default IconRepeatOffIcon;
