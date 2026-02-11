import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMirrorHorizontallyIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h4.8M3 3v18m0 0h4.8m8.7-18h.01m-.01 18h.01M21 3h.01M21 12h.01M21 21h.01M21 16.5h.01m-.01-9h.01M12 21V3m-.01 4.5"/>
    </svg>
  )
);

BaseIconMirrorHorizontallyIcon.displayName = 'BaseIconMirrorHorizontallyIcon';

export default BaseIconMirrorHorizontallyIcon;
