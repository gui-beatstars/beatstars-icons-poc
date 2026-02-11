import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconSkipForwardIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 4v16M7.32 18.84l7.45-5.4c.68-.49 1.03-.74 1.15-1.03q.15-.41 0-.82c-.12-.3-.47-.54-1.15-1.03l-7.45-5.4C6.26 4.39 5.72 4 5.28 4q-.62.01-1 .43C4 4.75 4 5.37 4 6.6v10.8c0 1.23 0 1.85.28 2.17q.38.42 1 .43c.45 0 .98-.39 2.04-1.16"/>
    </svg>
  )
);

BaseIconSkipForwardIcon.displayName = 'BaseIconSkipForwardIcon';

export default BaseIconSkipForwardIcon;
