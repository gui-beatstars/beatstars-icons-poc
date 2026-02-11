import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMusicNote02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 5.778 12.857 4v12.444m-1.004-2.514c1.339 1.389 1.339 3.64 0 5.029a3.343 3.343 0 0 1-4.849 0c-1.339-1.389-1.339-3.64 0-5.029a3.343 3.343 0 0 1 4.849 0"/>
    </svg>
  )
);

BaseIconMusicNote02Icon.displayName = 'BaseIconMusicNote02Icon';

export default BaseIconMusicNote02Icon;
