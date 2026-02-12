import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconHammer01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.004 21.004h-10.59m-.79-11.518L3.696 14.5a1.987 1.987 0 1 0 2.755 2.852l5.236-5.766m3.422-4.289 2.2 1.756a1.836 1.836 0 0 1 .157 2.727l-1.677 1.685a1.815 1.815 0 0 1-2.701-.143l-1.777-2.207a9.2 9.2 0 0 0-1.42-1.417L7.69 7.943a1.836 1.836 0 0 1-.157-2.727l1.674-1.684a1.815 1.815 0 0 1 2.701.144l1.779 2.206c.42.523.897.998 1.422 1.416"/>
    </svg>
  )
);

IconHammer01Icon.displayName = 'IconHammer01Icon';

export default IconHammer01Icon;
