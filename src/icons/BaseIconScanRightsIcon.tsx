import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconScanRightsIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11v3M9 6v12m9-6v1M6 10v5m9-8v10M6 3H3v3m15-3h3v3M6 21H3v-3m15 3h3v-3"/>
    </svg>
  )
);

BaseIconScanRightsIcon.displayName = 'BaseIconScanRightsIcon';

export default BaseIconScanRightsIcon;
