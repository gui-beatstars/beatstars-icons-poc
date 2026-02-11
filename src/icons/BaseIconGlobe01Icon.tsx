import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGlobe01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3.08 7.48 4.28 3.07c.23.15.34.23.46.25q.15.03.3-.04c.1-.06.18-.17.35-.39l.9-1.2q.07-.1.1-.12l.08-.07.14-.06 3.87-1.72q.23-.1.3-.17l.12-.17q.04-.1.05-.34l.29-4.25M13.5 13.5l2.62 1.12c.3.13.45.2.53.3q.1.16.1.33c0 .14-.1.28-.28.55l-1.23 1.84q-.12.18-.19.25l-.17.09q-.09.02-.3.02h-2c-.21 0-.31 0-.4-.03l-.2-.15q-.08-.09-.16-.37l-.72-2.14-.06-.23.01-.15q.02-.08.1-.23l.54-1.08c.11-.22.16-.33.25-.4a.5.5 0 0 1 .26-.1c.1-.02.22.02.46.1zM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"/>
    </svg>
  )
);

BaseIconGlobe01Icon.displayName = 'BaseIconGlobe01Icon';

export default BaseIconGlobe01Icon;
