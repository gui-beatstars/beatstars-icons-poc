import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconUnlocked01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10V8a5 5 0 0 1 9.58-2M12 14.5v2M8.8 21h6.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17v-1.4c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31c-.66-.33-1.5-.33-3.17-.33H8.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C4 12.29 4 13.13 4 14.8v1.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33"/>
    </svg>
  )
);

BaseIconUnlocked01Icon.displayName = 'BaseIconUnlocked01Icon';

export default BaseIconUnlocked01Icon;
