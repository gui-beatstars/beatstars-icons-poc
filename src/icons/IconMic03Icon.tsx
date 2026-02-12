import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconMic03Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.002 12.9A5 5 0 1 0 11.1 9m3.902 3.9L11.1 9.001l-7.513 8.584a2 2 0 0 0 2.827 2.83z"/>
    </svg>
  )
);

IconMic03Icon.displayName = 'IconMic03Icon';

export default IconMic03Icon;
