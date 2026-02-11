import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPenIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 6 6.5 7.3c-.36.07-.54.1-.69.2a1 1 0 0 0-.33.3c-.09.15-.13.33-.22.7L2 22m0 0 13.5-3.26c.37-.09.55-.13.7-.22a1 1 0 0 0 .3-.33c.1-.15.13-.33.2-.7L18 11M2 22l7.59-7.59m11.28-6.54-4.74-4.74c-.4-.4-.6-.6-.82-.67a1 1 0 0 0-.62 0c-.23.08-.43.28-.82.67l-.74.74c-.4.4-.6.6-.67.82a1 1 0 0 0 0 .62c.08.23.28.43.67.82l4.74 4.74c.4.4.6.6.82.67a1 1 0 0 0 .62 0c.23-.08.43-.28.82-.67l.74-.74c.4-.4.6-.6.67-.82a1 1 0 0 0 0-.62c-.08-.23-.28-.43-.67-.82M11 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4"/>
    </svg>
  )
);

BaseIconPenIcon.displayName = 'BaseIconPenIcon';

export default BaseIconPenIcon;
