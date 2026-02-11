import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconMusicDistributionIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 2a5 5 0 0 1 5 5m-5-2a2 2 0 0 1 2 2m-8.88 8.63V10.4c0-.45.27-.85.68-1.01l3.8-1.52c.71-.29 1.49.24 1.49 1v5.68M11.5 3H6.22A4.2 4.2 0 0 0 2 7.22v9.5A5.3 5.3 0 0 0 7.28 22h9.5A4.2 4.2 0 0 0 21 17.78V12.5M9.64 14.48a1.63 1.63 0 1 1-2.3 2.3 1.63 1.63 0 0 1 2.3-2.3m5.97-1.08a1.63 1.63 0 1 1-2.3 2.3 1.63 1.63 0 0 1 2.3-2.3"/>
    </svg>
  )
);

BaseIconMusicDistributionIcon.displayName = 'BaseIconMusicDistributionIcon';

export default BaseIconMusicDistributionIcon;
