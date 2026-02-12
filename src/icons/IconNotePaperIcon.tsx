import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconNotePaperIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.83 7h6.829m-6.83 4h4.878m-8.78 4V7.8c0-1.68 0-2.52.319-3.162a2.97 2.97 0 0 1 1.279-1.311C7.15 3 7.97 3 9.61 3h8M4.927 15h11.707c-1.616 0-2.927 1.343-2.927 3s1.31 3 2.927 3M4.927 15C3.31 15 2 16.343 2 18s1.31 3 2.927 3h11.707m2.927-6.4V8C20.537 8 22 9 22 11m-5.366 10c1.617 0 2.927-1.343 2.927-3v-3.5"/>
    </svg>
  )
);

IconNotePaperIcon.displayName = 'IconNotePaperIcon';

export default IconNotePaperIcon;
