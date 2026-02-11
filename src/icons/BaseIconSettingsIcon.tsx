import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconSettingsIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.73 14.73a1.5 1.5 0 0 0 .3 1.65l.05.06A1.82 1.82 0 1 1 16.51 19l-.06-.06a1.5 1.5 0 0 0-1.65-.3 1.5 1.5 0 0 0-.9 1.38v.15a1.82 1.82 0 1 1-3.65 0v-.08a1.5 1.5 0 0 0-.98-1.37 1.5 1.5 0 0 0-1.65.3l-.06.05A1.82 1.82 0 1 1 5 16.51l.06-.06a1.5 1.5 0 0 0 .3-1.65 1.5 1.5 0 0 0-1.38-.9h-.15a1.82 1.82 0 1 1 0-3.65h.08a1.5 1.5 0 0 0 1.37-.98 1.5 1.5 0 0 0-.3-1.65l-.05-.06A1.82 1.82 0 1 1 7.49 5l.06.06a1.5 1.5 0 0 0 1.65.3h.07a1.5 1.5 0 0 0 .91-1.38v-.15a1.82 1.82 0 0 1 3.64 0v.08a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.66-.3l.06-.05A1.82 1.82 0 1 1 19 7.49l-.06.06a1.5 1.5 0 0 0-.3 1.65v.07a1.5 1.5 0 0 0 1.38.91h.15a1.82 1.82 0 0 1 0 3.64h-.08a1.5 1.5 0 0 0-1.37.9"/>
    </svg>
  )
);

BaseIconSettingsIcon.displayName = 'BaseIconSettingsIcon';

export default BaseIconSettingsIcon;
