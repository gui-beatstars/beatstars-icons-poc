import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPinIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.38 15.62-5.66 5.65m8.97-14.63L10.13 8.2q-.17.19-.26.24l-.2.12-.35.08-3.67.73c-.95.2-1.43.29-1.65.54a1 1 0 0 0-.24.8c.04.33.39.68 1.07 1.36l7.09 7.09c.69.69 1.03 1.03 1.36 1.08a1 1 0 0 0 .8-.25c.25-.22.35-.7.54-1.65l.73-3.66.09-.35.1-.2c.06-.08.12-.14.25-.27l1.56-1.56.17-.16.12-.08q.06-.04.21-.1l2.5-1.07c.72-.31 1.09-.47 1.25-.72a1 1 0 0 0 .15-.75c-.06-.3-.34-.57-.9-1.13L15.7 3.15c-.56-.56-.84-.84-1.13-.9a1 1 0 0 0-.75.14c-.25.16-.4.53-.72 1.26l-1.07 2.5q-.05.14-.1.2l-.08.12q-.04.06-.16.17"/>
    </svg>
  )
);

BaseIconPinIcon.displayName = 'BaseIconPinIcon';

export default BaseIconPinIcon;
