import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGoogleDriveIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.5 15.462 15.048 3H8.274M22.5 15.462h-6.097L8.274 3M22.5 15.462H7.597L4.21 21m18.29-5.539L19.113 21H4.21M8.274 3 1.5 15.462 4.21 21M8.274 3l3.596 5.512L4.21 21"/>
    </svg>
  )
);

BaseIconGoogleDriveIcon.displayName = 'BaseIconGoogleDriveIcon';

export default BaseIconGoogleDriveIcon;
