import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconScale01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 17v-.15c0-.32 0-.47.02-.63a2 2 0 0 1 .11-.4c.06-.15.13-.28.3-.56L6 9m-4 8a4 4 0 0 0 8 0m-8 0v-.2c0-.28 0-.42.05-.53a.5.5 0 0 1 .22-.22c.11-.05.25-.05.53-.05h6.4c.28 0 .42 0 .53.05q.15.08.22.22c.05.11.05.25.05.53v.2M6 9l3.58 6.26c.16.28.23.41.29.56a2 2 0 0 1 .1.4c.03.16.03.31.03.63V17M6 9l12-2m-4 8v-.15c0-.32 0-.47.02-.63a2 2 0 0 1 .11-.4c.06-.15.13-.28.3-.56L18 7m-4 8a4 4 0 0 0 8 0m-8 0v-.2c0-.28 0-.42.05-.53a.5.5 0 0 1 .22-.22c.11-.05.25-.05.53-.05h6.4c.28 0 .42 0 .53.05q.15.08.22.22c.05.11.05.25.05.53v.2m-4-8 3.58 6.26c.16.28.23.41.29.56a2 2 0 0 1 .1.4c.03.16.03.31.03.63V15M12 3v5"/>
    </svg>
  )
);

BaseIconScale01Icon.displayName = 'BaseIconScale01Icon';

export default BaseIconScale01Icon;
