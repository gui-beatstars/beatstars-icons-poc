import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconFingerprint01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5.807 18.53.054-.089A13.9 13.9 0 0 0 8 11a4 4 0 1 1 8 0q-.002 1.527-.203 3m-2.118 6.844A22 22 0 0 0 15.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 0 0 8 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4M12 11c0 3.517-1.009 6.799-2.753 9.571"/>
    </svg>
  )
);

BaseIconFingerprint01Icon.displayName = 'BaseIconFingerprint01Icon';

export default BaseIconFingerprint01Icon;
