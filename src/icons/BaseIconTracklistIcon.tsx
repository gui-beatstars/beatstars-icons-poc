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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 15h-5M14 19.151v-5.823c0-.409.249-.777.629-.928l4.5-1.4a1 1 0 0 1 1.371.928v6.223M11.5 10h-8m16-5h-16m10.061 13.439a1.5 1.5 0 1 1-2.12 2.121 1.5 1.5 0 0 1 2.12-2.121m6.5-1a1.5 1.5 0 1 1-2.12 2.121 1.5 1.5 0 0 1 2.12-2.121"/>
    </svg>
  )
);

BaseIconTracklistIcon.displayName = 'BaseIconTracklistIcon';

export default BaseIconTracklistIcon;
