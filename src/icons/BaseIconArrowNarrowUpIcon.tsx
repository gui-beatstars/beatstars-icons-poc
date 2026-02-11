import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconArrowNarrowUpIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20V4m0 0 6 6m-6-6-6 6"/>
    </svg>
  )
);

BaseIconArrowNarrowUpIcon.displayName = 'BaseIconArrowNarrowUpIcon';

export default BaseIconArrowNarrowUpIcon;
