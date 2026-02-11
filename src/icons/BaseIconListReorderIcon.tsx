import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconListReorderIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth, className, style, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={style}
      {...rest}
    >
      <path fill="currentColor" d="M19.88 7a1 1 0 1 0 0-2zM4 5a1 1 0 0 0 0 2zm8.92 8a1 1 0 1 0 0-2zM4 11a1 1 0 1 0 0 2zm15.88 8a1 1 0 1 0 0-2zM4 17a1 1 0 1 0 0 2zm15.41-1.95a1 1 0 0 0 1.18-1.62l-.59.81zM16.91 12l-.55-.84a1 1 0 0 0-.04 1.65zm3.63-1.16a1 1 0 1 0-1.08-1.68L20 10zM19.88 6V5H4v2h15.88zm-6.96 6v-1H4v2h8.92zm6.96 6v-1H4v2h15.88zm.12-3.76.59-.8-3.1-2.25-.59.81-.58.81 3.1 2.24zM16.9 12l.54.84 3.1-2L20 10l-.54-.84-3.1 2z"/>
    </svg>
  )
);

BaseIconListReorderIcon.displayName = 'BaseIconListReorderIcon';

export default BaseIconListReorderIcon;
