import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconTranslate01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.91 17h7.18m-7.18 0L11 21m1.91-4 2.87-6c.23-.47.34-.72.5-.8a.5.5 0 0 1 .44 0c.16.08.27.33.5.8l2.87 6m0 0L22 21M2 5h6m0 0h3.5M8 5V3m3.5 2H14m-2.5 0a18 18 0 0 1-3.33 7.88M10 14a9 9 0 0 1-1.83-1.12m0 0A10 10 0 0 1 5 9m3.17 3.88A17 17 0 0 1 2 18"/>
    </svg>
  )
);

BaseIconTranslate01Icon.displayName = 'BaseIconTranslate01Icon';

export default BaseIconTranslate01Icon;
