import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMembershipIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.5 20H5a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1.5M12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0h.02l-3.2 3.2L6 19.35l3.02-3.02M12 19l3.2 3.2 2.82-2.84L15 16.34M9 6h6M7 9.5h10"/>
    </svg>
  )
);

BaseIconMembershipIcon.displayName = 'BaseIconMembershipIcon';

export default BaseIconMembershipIcon;
