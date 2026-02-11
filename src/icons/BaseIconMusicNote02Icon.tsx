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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 5.78 12.86 4v12.44m-1-2.51a3.65 3.65 0 0 1 0 5.03 3.34 3.34 0 0 1-4.86 0 3.65 3.65 0 0 1 0-5.03 3.34 3.34 0 0 1 4.85 0"/>
    </svg>
  )
);

BaseIconMusicNote02Icon.displayName = 'BaseIconMusicNote02Icon';

export default BaseIconMusicNote02Icon;
