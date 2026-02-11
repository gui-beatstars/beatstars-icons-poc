import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCameraIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 8.38.01-.68a3 3 0 0 1 2.7-2.69L5.4 5h.27A2 2 0 0 0 7.5 3.5l.09-.25A2 2 0 0 1 9.32 2h5.36a2 2 0 0 1 1.73 1.25l.09.25.09.25a2 2 0 0 0 2 1.25l.7.01a3 3 0 0 1 2.7 2.7l.01.67v7.82c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H6.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C2 18.71 2 17.87 2 16.2z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
    </svg>
  )
);

BaseIconCameraIcon.displayName = 'BaseIconCameraIcon';

export default BaseIconCameraIcon;
