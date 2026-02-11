import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconShuffleOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18 15 3 3m0 0-3 3m3-3h-2.43c-.94 0-1.41 0-1.84-.13a3 3 0 0 1-1.03-.55c-.34-.29-.6-.68-1.12-1.46l-.25-.36M18 3l3 3m0 0-3 3m3-3h-2.43c-.94 0-1.41 0-1.84.13a3 3 0 0 0-1.03.55c-.34.29-.6.68-1.12 1.46l-5.16 7.72a7 7 0 0 1-1.12 1.46 3 3 0 0 1-1.03.55c-.43.13-.9.13-1.84.13H3M3 6h2.43c.94 0 1.41 0 1.84.13a3 3 0 0 1 1.03.55c.34.29.6.68 1.12 1.46l.25.36"/>
    </svg>
  )
);

BaseIconShuffleOffIcon.displayName = 'BaseIconShuffleOffIcon';

export default BaseIconShuffleOffIcon;
