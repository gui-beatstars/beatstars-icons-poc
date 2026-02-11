import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconArrowNarrowDownRightIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 6 12 12m0 0v-8m0 8h-8"/>
    </svg>
  )
);

BaseIconArrowNarrowDownRightIcon.displayName = 'BaseIconArrowNarrowDownRightIcon';

export default BaseIconArrowNarrowDownRightIcon;
