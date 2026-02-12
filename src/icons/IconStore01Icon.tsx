import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconStore01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 12v8m15-8v8M2 20.5h20m-8-.5v-3.333c0-.92-.896-1.667-2-1.667s-2 .746-2 1.667V20m-5.7-8c-1.697-.014-2.804-1.959-2.068-3.636l1.715-3.907C4.337 3.566 5.16 3 6.062 3h11.875c.902 0 1.724.566 2.115 1.457l1.716 3.907c.736 1.677-.37 3.622-2.069 3.636-1.417 0-2.565-1.12-2.565-2.503v-.055A2.56 2.56 0 0 1 14.568 12a2.56 2.56 0 0 1-2.566-2.558A2.56 2.56 0 0 1 9.436 12 2.56 2.56 0 0 1 6.87 9.442v.055C6.867 10.88 5.718 12 4.3 12"/>
    </svg>
  )
);

IconStore01Icon.displayName = 'IconStore01Icon';

export default IconStore01Icon;
