import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconLock02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 11V8A5 5 0 0 0 7 8v3m.8 10h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17v-.4c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31c-.66-.33-1.5-.33-3.17-.33H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 13.29 3 14.13 3 15.8v.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33"/>
    </svg>
  )
);

BaseIconLock02Icon.displayName = 'BaseIconLock02Icon';

export default BaseIconLock02Icon;
