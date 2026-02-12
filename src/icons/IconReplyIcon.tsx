import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconReplyIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 18v-2a4 4 0 0 0-4-4H4m0 0 5 5m-5-5 5-5"/>
    </svg>
  )
);

IconReplyIcon.displayName = 'IconReplyIcon';

export default IconReplyIcon;
