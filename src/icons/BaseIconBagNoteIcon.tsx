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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.26 6.98H9.8m4.46 0c2.99 0 4.64 1.83 5.67 4.6l.38 1c1.7 4.57.3 9.42-4.66 9.42H8.38c-5.05 0-6.46-5-4.59-9.61l.41-1c1.08-2.67 2.7-4.41 5.6-4.41m4.46 0 2.43-4.5c-1.29-.96-3.19-.3-4.6.43-.66.34-1.4.5-2.14.38l-1.92-.32 1.77 4M12 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 0V10c1.33 0 3 1.5 3 3"/>
    </svg>
  )
);

BaseIconBagNoteIcon.displayName = 'BaseIconBagNoteIcon';

export default BaseIconBagNoteIcon;
