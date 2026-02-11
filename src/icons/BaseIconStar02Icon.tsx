import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconStar02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.5 13 .78 1.57c.27.53.4.8.58 1.03a3 3 0 0 0 .54.54c.23.18.5.31 1.03.58l1.57.78-1.57.78c-.53.27-.8.4-1.03.58a3 3 0 0 0-.54.54c-.18.23-.31.5-.58 1.03L6.5 22l-.78-1.57c-.27-.53-.4-.8-.58-1.03a3 3 0 0 0-.54-.54c-.23-.18-.5-.31-1.03-.58L2 17.5l1.57-.78c.53-.27.8-.4 1.03-.58a3 3 0 0 0 .54-.54c.18-.23.31-.5.58-1.03zM15 2l1.18 3.06c.28.74.42 1.1.64 1.41a3 3 0 0 0 .7.7c.32.23.68.37 1.42.65L22 9l-3.06 1.18c-.74.28-1.1.42-1.41.64a3 3 0 0 0-.7.7c-.23.32-.37.68-.65 1.42L15 16l-1.18-3.06a6 6 0 0 0-.64-1.41 3 3 0 0 0-.7-.7 6 6 0 0 0-1.42-.65L8 9l3.06-1.18c.74-.28 1.1-.42 1.41-.64a3 3 0 0 0 .7-.7c.23-.32.37-.68.65-1.42z"/>
    </svg>
  )
);

BaseIconStar02Icon.displayName = 'BaseIconStar02Icon';

export default BaseIconStar02Icon;
