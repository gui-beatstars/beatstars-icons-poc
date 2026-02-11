import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconUnlocked02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11V8a5 5 0 0 1 9.9-1M7.8 21h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17v-.4c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31c-.66-.33-1.5-.33-3.17-.33H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 13.29 3 14.13 3 15.8v.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33"/>
    </svg>
  )
);

BaseIconUnlocked02Icon.displayName = 'BaseIconUnlocked02Icon';

export default BaseIconUnlocked02Icon;
