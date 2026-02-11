import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconEdit01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M3 20h1.67c.5 0 .74 0 .97-.06a2 2 0 0 0 .58-.23c.2-.13.37-.3.72-.65L19.5 6.5a2.12 2.12 0 0 0-3-3L3.94 16.06a5 5 0 0 0-.65.72 2 2 0 0 0-.23.58c-.06.23-.06.48-.06.97z"/>
    </svg>
  )
);

BaseIconEdit01Icon.displayName = 'BaseIconEdit01Icon';

export default BaseIconEdit01Icon;
