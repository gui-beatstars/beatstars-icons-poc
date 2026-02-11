import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconEmbedIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15.5 15 3-3-3-3m-7 0-3 3 3 3M13 7l-2 10m11-5a10 10 0 1 1-20 0 10 10 0 0 1 20 0"/>
    </svg>
  )
);

BaseIconEmbedIcon.displayName = 'BaseIconEmbedIcon';

export default BaseIconEmbedIcon;
