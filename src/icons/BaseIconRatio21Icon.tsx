import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconRatio21Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3h14v18H5z"/>
    </svg>
  )
);

BaseIconRatio21Icon.displayName = 'BaseIconRatio21Icon';

export default BaseIconRatio21Icon;
