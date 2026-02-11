import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconDocumentSignIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.238 8.294h6.291m-6.291 3.177h4.174M7 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1m-5.756 6.598 2.573 2.573m1.825-1.826.953.953a1.29 1.29 0 0 1 0 1.82l-1.737 1.737m-5.564 1.835c-.199.198-.468.31-.749.31h-2.133v-2.134c0-.28.111-.55.31-.748l7.167-7.172a1.822 1.822 0 1 1 2.577 2.577z"/>
    </svg>
  )
);

BaseIconDocumentSignIcon.displayName = 'BaseIconDocumentSignIcon';

export default BaseIconDocumentSignIcon;
