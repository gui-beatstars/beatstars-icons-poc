import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconCloudStorateIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19H6.5a4.5 4.5 0 0 1-.42-8.98A6.002 6.002 0 0 1 17 7.681m-1.158 10.483v-5.782a.99.99 0 0 1 .595-.92l4.264-1.39c.622-.262 1.299.218 1.299.92v6.179m-6.574.286a1.54 1.54 0 0 1 0 2.106 1.375 1.375 0 0 1-2.01 0 1.54 1.54 0 0 1 0-2.106 1.376 1.376 0 0 1 2.01 0m6.158-.993a1.54 1.54 0 0 1 0 2.106 1.375 1.375 0 0 1-2.01 0 1.54 1.54 0 0 1 0-2.106 1.376 1.376 0 0 1 2.01 0"/>
    </svg>
  )
);

IconCloudStorateIcon.displayName = 'IconCloudStorateIcon';

export default IconCloudStorateIcon;
