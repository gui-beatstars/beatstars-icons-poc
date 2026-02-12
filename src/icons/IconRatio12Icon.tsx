import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconRatio12Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 5v14H3V5z"/>
    </svg>
  )
);

IconRatio12Icon.displayName = 'IconRatio12Icon';

export default IconRatio12Icon;
