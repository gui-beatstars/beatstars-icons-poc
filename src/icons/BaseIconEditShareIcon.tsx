import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconEditShareIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 15.75h.008m4.492 4.5h.008M21 15l-6 6m1.125-5.25a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m4.5 4.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0M3 20h1.675c.489 0 .733 0 .964-.055q.308-.075.578-.24c.201-.123.374-.296.72-.642L19.5 6.5a2.121 2.121 0 0 0-3-3L3.937 16.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.578c-.055.23-.055.475-.055.965z"/>
    </svg>
  )
);

BaseIconEditShareIcon.displayName = 'BaseIconEditShareIcon';

export default BaseIconEditShareIcon;
