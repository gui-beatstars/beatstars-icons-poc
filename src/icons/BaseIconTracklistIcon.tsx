import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconTracklistIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 15h-5M14 19.15v-5.82a1 1 0 0 1 .63-.93l4.5-1.4a1 1 0 0 1 1.37.93v6.22m-9-8.15h-8m16-5h-16m10.06 13.44a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12m6.5-1a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12"/>
    </svg>
  )
);

BaseIconTracklistIcon.displayName = 'BaseIconTracklistIcon';

export default BaseIconTracklistIcon;
