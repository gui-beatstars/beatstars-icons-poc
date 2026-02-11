import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconBagNoteIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.257 6.98H9.803m4.454 0c2.992 0 4.647 1.835 5.677 4.596l.373 1.001c1.707 4.575.3 9.423-4.658 9.423H8.377c-5.045 0-6.457-5.009-4.584-9.613l.408-1.001c1.083-2.662 2.686-4.407 5.602-4.407m4.454 0 2.434-4.506c-1.288-.95-3.19-.295-4.601.434-.66.34-1.408.5-2.143.38l-1.915-.313 1.771 4.005M12 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 0V10c1.333 0 3 1.5 3 3"/>
    </svg>
  )
);

BaseIconBagNoteIcon.displayName = 'BaseIconBagNoteIcon';

export default BaseIconBagNoteIcon;
