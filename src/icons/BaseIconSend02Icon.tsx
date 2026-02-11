import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconSend02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.6 13.4 9.83-9.83m-9.7 10.13 2.45 6.33c.22.56.33.84.48.92q.22.1.43 0c.16-.08.27-.36.49-.92l6.16-15.8c.2-.5.3-.76.25-.92a.5.5 0 0 0-.3-.3c-.16-.05-.41.05-.91.25L3.97 9.42c-.56.22-.84.33-.92.49a.5.5 0 0 0 0 .43c.08.15.36.26.92.48l6.33 2.46.21.1.11.1z"/>
    </svg>
  )
);

BaseIconSend02Icon.displayName = 'BaseIconSend02Icon';

export default BaseIconSend02Icon;
