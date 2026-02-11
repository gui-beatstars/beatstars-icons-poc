import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconGrid02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.4 3H4.6c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.45C3 3.76 3 4.04 3 4.6v3.8c0 .56 0 .84.1 1.05a1 1 0 0 0 .45.44c.21.11.49.11 1.05.11h3.8c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.45c.11-.21.11-.49.11-1.05V4.6c0-.56 0-.84-.1-1.05a1 1 0 0 0-.45-.44C9.24 3 8.96 3 8.4 3m11 11h-3.8c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.45c-.11.21-.11.49-.11 1.05v3.8c0 .56 0 .84.1 1.05a1 1 0 0 0 .45.44c.21.11.49.11 1.05.11h3.8c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.45c.11-.21.11-.49.11-1.05v-3.8c0-.56 0-.84-.1-1.05a1 1 0 0 0-.45-.44c-.21-.11-.49-.11-1.05-.11m-11 0H4.6c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.45C3 14.76 3 15.04 3 15.6v3.8c0 .56 0 .84.1 1.05a1 1 0 0 0 .45.44c.21.11.49.11 1.05.11h3.8c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.45c.11-.21.11-.49.11-1.05v-3.8c0-.56 0-.84-.1-1.05a1 1 0 0 0-.45-.44C9.24 14 8.96 14 8.4 14m7.97-11.32-2.69 2.69c-.4.4-.6.6-.67.82a1 1 0 0 0 0 .62c.08.23.28.43.67.82l2.69 2.69c.4.4.6.6.82.67a1 1 0 0 0 .62 0c.23-.08.43-.28.82-.67l2.69-2.69c.4-.4.6-.6.67-.82a1 1 0 0 0 0-.62c-.08-.23-.28-.43-.67-.82l-2.69-2.69c-.4-.4-.6-.6-.82-.67a1 1 0 0 0-.62 0c-.23.08-.43.28-.82.67"/>
    </svg>
  )
);

BaseIconGrid02Icon.displayName = 'BaseIconGrid02Icon';

export default BaseIconGrid02Icon;
