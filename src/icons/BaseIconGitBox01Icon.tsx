import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGitBox01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.95" d="M12 6v16m0-16H8.46a2 2 0 0 1-1.38-.59 2 2 0 0 1 0-2.82C7.44 2.2 7.94 2 8.46 2 11.21 2 12 6 12 6m0 0h3.54a2 2 0 0 0 1.38-.59 2 2 0 0 0 0-2.82A2 2 0 0 0 15.54 2C12.79 2 12 6 12 6m8 5v7.8c0 1.12 0 1.68-.22 2.1a2 2 0 0 1-.87.88c-.43.22-.99.22-2.11.22H7.2c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87C4 20.48 4 19.92 4 18.8V11M2 7.6v1.8c0 .56 0 .84.1 1.05a1 1 0 0 0 .45.44c.21.11.49.11 1.05.11h16.8c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.45c.11-.21.11-.49.11-1.05V7.6c0-.56 0-.84-.1-1.05a1 1 0 0 0-.45-.44C21.24 6 20.96 6 20.4 6H3.6c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.45C2 6.76 2 7.04 2 7.6"/>
    </svg>
  )
);

BaseIconGitBox01Icon.displayName = 'BaseIconGitBox01Icon';

export default BaseIconGitBox01Icon;
