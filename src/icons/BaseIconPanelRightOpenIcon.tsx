import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPanelRightOpenIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3v18M10 9l-3 3 3 3m9-12H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"/>
    </svg>
  )
);

BaseIconPanelRightOpenIcon.displayName = 'BaseIconPanelRightOpenIcon';

export default BaseIconPanelRightOpenIcon;
