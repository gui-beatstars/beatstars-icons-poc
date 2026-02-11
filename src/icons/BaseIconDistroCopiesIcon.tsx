import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconDistroCopiesIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 4-4.85 7.71q-.1.14-.11.22v.14q.01.07.11.22L12 20M6.97 4l-4.85 7.71q-.1.14-.11.22v.14q.01.07.11.22L6.97 20M17.03 4l4.85 7.71q.1.14.11.22.02.07 0 .14l-.11.22L17.03 20l-4.85-7.71q-.1-.14-.11-.22v-.14q.01-.07.11-.22z"/>
    </svg>
  )
);

BaseIconDistroCopiesIcon.displayName = 'BaseIconDistroCopiesIcon';

export default BaseIconDistroCopiesIcon;
