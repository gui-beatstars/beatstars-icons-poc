import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconPlayerPauseIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.516 3.002 9.638 3c.213 0 .29.02.368.06q.118.06.18.17c.042.074.064.146.064.347v16.846c0 .2-.022.274-.064.347a.4.4 0 0 1-.18.17c-.078.04-.155.06-.368.06H5.612c-.213 0-.29-.02-.368-.06a.4.4 0 0 1-.18-.17.5.5 0 0 1-.062-.257L5 3.577c0-.2.022-.273.064-.347a.4.4 0 0 1 .18-.17.6.6 0 0 1 .272-.058" clipRule="evenodd"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.266 3.002 18.388 3c.213 0 .29.02.368.06q.118.06.18.17c.042.074.064.146.064.347v16.846c0 .2-.022.274-.064.347a.4.4 0 0 1-.18.17c-.078.04-.155.06-.368.06h-4.026c-.213 0-.29-.02-.368-.06a.4.4 0 0 1-.18-.17.5.5 0 0 1-.062-.257L13.75 3.577c0-.2.022-.273.064-.347a.4.4 0 0 1 .18-.17.6.6 0 0 1 .272-.058" clipRule="evenodd"/>
    </svg>
  )
);

BaseIconPlayerPauseIcon.displayName = 'BaseIconPlayerPauseIcon';

export default BaseIconPlayerPauseIcon;
