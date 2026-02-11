import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconDiskCollectionIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.817 2.5h12.366m-3.633 8.47a3.76 3.76 0 0 1 0 5.226 3.547 3.547 0 0 1-5.1 0 3.76 3.76 0 0 1 0-5.225 3.547 3.547 0 0 1 5.1 0m4.388-5.303H5.062c-1.193 0-2.137 1.033-2.057 2.251L3.76 19.53c.072 1.11.972 1.971 2.057 1.971h12.366c1.085 0 1.985-.861 2.057-1.97l.755-11.612c.08-1.218-.864-2.251-2.057-2.251"/>
    </svg>
  )
);

BaseIconDiskCollectionIcon.displayName = 'BaseIconDiskCollectionIcon';

export default BaseIconDiskCollectionIcon;
