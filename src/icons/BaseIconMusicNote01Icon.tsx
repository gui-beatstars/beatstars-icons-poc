import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMusicNote01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 18V5l12-2v13m-12 2a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-12-7 12-2"/>
    </svg>
  )
);

BaseIconMusicNote01Icon.displayName = 'BaseIconMusicNote01Icon';

export default BaseIconMusicNote01Icon;
