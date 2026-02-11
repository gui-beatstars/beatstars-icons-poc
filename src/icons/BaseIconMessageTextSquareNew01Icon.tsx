import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMessageTextSquareNew01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.2 3H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 5.29 3 6.13 3 7.8V14c0 .93 0 1.4.1 1.78a3 3 0 0 0 2.12 2.12c.39.1.85.1 1.78.1v2.34c0 .53 0 .8.1.93q.16.19.4.19c.18 0 .38-.17.8-.5l2.39-1.9c.48-.4.73-.6 1-.73a3 3 0 0 1 .76-.27c.3-.06.61-.06 1.23-.06h2.52c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V9.8M7 8.5h5M7 12h8m4-9v2m0 0v2m0-2h-2m2 0h2"/>
    </svg>
  )
);

BaseIconMessageTextSquareNew01Icon.displayName = 'BaseIconMessageTextSquareNew01Icon';

export default BaseIconMessageTextSquareNew01Icon;
