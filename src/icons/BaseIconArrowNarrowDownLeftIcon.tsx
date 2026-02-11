import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconArrowNarrowDownLeftIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18m0 0h8m-8 0v-8"/>
    </svg>
  )
);

BaseIconArrowNarrowDownLeftIcon.displayName = 'BaseIconArrowNarrowDownLeftIcon';

export default BaseIconArrowNarrowDownLeftIcon;
