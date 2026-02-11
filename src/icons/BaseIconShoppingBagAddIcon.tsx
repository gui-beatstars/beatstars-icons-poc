import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconShoppingBagAddIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h8M8 6c-1.3 0-2 .02-2.55.29a3 3 0 0 0-1.3 1.18c-.34.58-.41 1.35-.56 2.88l-.6 6.4c-.17 1.82-.25 2.73.05 3.43a3 3 0 0 0 1.32 1.45c.67.37 1.58.37 3.41.37H12M8 6v3m0-3a4 4 0 1 1 8 0m0 0c1.3 0 2 .02 2.55.29a3 3 0 0 1 1.3 1.18c.34.58.41 1.35.56 2.88l.3 3.2M16 6v3m2 7v3m0 0v3m0-3h-3m3 0h3"/>
    </svg>
  )
);

BaseIconShoppingBagAddIcon.displayName = 'BaseIconShoppingBagAddIcon';

export default BaseIconShoppingBagAddIcon;
