import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconKeysIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11.56 10.35.32 1.21.94 3.51 1.3 4.83c.26.97-.4 2-1.46 2.28-1.07.28-2.15-.27-2.4-1.24m1.3-10.59-.74-2.74m.74 2.74q.43-.23.94-.37c2.13-.57 4.28.54 4.8 2.48.65 2.43-.99 4.97-3.65 5.69-2.67.71-5.35-.65-6-3.1-.16-.55-.92-3.4 3.17-7.44m0 0L9.88 4.1c-.26-.97.4-2 1.46-2.28 1.07-.28 2.15.27 2.4 1.24.57 2.1-1.79 3.62-2.92 4.55"/>
    </svg>
  )
);

BaseIconKeysIcon.displayName = 'BaseIconKeysIcon';

export default BaseIconKeysIcon;
