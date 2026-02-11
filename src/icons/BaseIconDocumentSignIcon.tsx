import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconDocumentSignIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.24 8.3h6.29m-6.3 3.17h4.18M7 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1m-5.76 6.6 2.58 2.57m1.82-1.82.95.95c.5.5.5 1.31 0 1.82l-1.73 1.73m-5.57 1.84q-.31.3-.74.31H10.4v-2.13q0-.44.31-.75l7.17-7.17a1.82 1.82 0 1 1 2.58 2.57z"/>
    </svg>
  )
);

BaseIconDocumentSignIcon.displayName = 'BaseIconDocumentSignIcon';

export default BaseIconDocumentSignIcon;
