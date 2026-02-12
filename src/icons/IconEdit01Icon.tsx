import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconEdit01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M3 20h1.675c.489 0 .733 0 .963-.055q.309-.075.579-.24c.201-.123.374-.296.72-.642L19.5 6.5a2.121 2.121 0 1 0-3-3L3.937 16.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.578c-.055.23-.055.475-.055.965z"/>
    </svg>
  )
);

IconEdit01Icon.displayName = 'IconEdit01Icon';

export default IconEdit01Icon;
