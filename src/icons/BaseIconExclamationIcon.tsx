import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconExclamationIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m10 0a10 10 0 1 0-20 0 10 10 0 0 0 20 0"/>
    </svg>
  )
);

BaseIconExclamationIcon.displayName = 'BaseIconExclamationIcon';

export default BaseIconExclamationIcon;
