import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconDeviceLaptopBothIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 16v-2.692M3 16h5.337c.245 0 .367 0 .482.028a1 1 0 0 1 .29.12c.1.061.187.148.36.32l.062.063c.173.173.26.26.36.322a1 1 0 0 0 .29.12c.115.027.237.027.482.027h2.674c.245 0 .367 0 .482-.028a1 1 0 0 0 .29-.12c.1-.061.187-.148.36-.32l.062-.063c.173-.173.26-.26.36-.322a1 1 0 0 1 .29-.12c.115-.027.237-.027.482-.027h5.004M3 16a1 1 0 0 0-1 1v.333c0 .62 0 .93.068 1.185a2 2 0 0 0 1.414 1.414c.255.068.565.068 1.185.068h14.666c.62 0 .93 0 1.185-.068a2 2 0 0 0 1.414-1.414c.068-.255.068-.565.068-1.185 0-.31 0-.465-.034-.592a1 1 0 0 0-.707-.707C21.132 16 20.977 16 20.667 16m0 0H21V4M6 4h9.663m-2.769 7.469V8L14 8.5M21 4l2 2m-2-2-2 2M6.2 4c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2V10m0 0L1 8m2 2 2-2m7.617 3.045c.37.349.37.915 0 1.263-.37.35-.97.35-1.34 0a.86.86 0 0 1 0-1.263.99.99 0 0 1 1.34 0"/>
    </svg>
  )
);

IconDeviceLaptopBothIcon.displayName = 'IconDeviceLaptopBothIcon';

export default IconDeviceLaptopBothIcon;
