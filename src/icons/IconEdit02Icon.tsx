import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconEdit02Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.435 10.29 13.71 6.565M3 21l3.152-.35c.385-.043.577-.064.757-.123q.241-.077.452-.217c.158-.104.295-.24.569-.515L20.229 7.497a2.634 2.634 0 1 0-3.726-3.726l-12.298 12.3c-.274.273-.411.41-.515.568q-.14.211-.217.452c-.059.18-.08.372-.123.757z"/>
    </svg>
  )
);

IconEdit02Icon.displayName = 'IconEdit02Icon';

export default IconEdit02Icon;
