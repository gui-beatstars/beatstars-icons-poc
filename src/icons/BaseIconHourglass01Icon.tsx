import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconHourglass01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12 7.73 8.44a6 6 0 0 1-1.18-1.12 3 3 0 0 1-.45-.95C6 6 6 5.57 6 4.75V2m6 10 4.27-3.56c.64-.53.96-.8 1.18-1.12a3 3 0 0 0 .45-.95c.1-.38.1-.8.1-1.62V2m-6 10-4.27 3.56c-.64.53-.96.8-1.18 1.12a3 3 0 0 0-.45.95c-.1.38-.1.8-.1 1.62V22m6-10 4.27 3.56c.64.53.96.8 1.18 1.12q.3.43.45.95c.1.38.1.8.1 1.62V22M4 2h16M4 22h16"/>
    </svg>
  )
);

BaseIconHourglass01Icon.displayName = 'BaseIconHourglass01Icon';

export default BaseIconHourglass01Icon;
