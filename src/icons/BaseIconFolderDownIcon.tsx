import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconFolderDownIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 7-1.12-2.23c-.32-.64-.48-.96-.72-1.2a2 2 0 0 0-.74-.46C10.1 3 9.74 3 9.02 3H5.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C2 4.52 2 5.08 2 6.2V7m11 0H2m11 0h4.2c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v4.4c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H6.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C2 18.71 2 17.87 2 16.2V7m10.91 6h-1.82c-.97 0-1.45 0-1.68.2a.8.8 0 0 0-.28.66c.03.3.37.64 1.06 1.33l.9.9c.32.32.48.48.66.54a1 1 0 0 0 .5 0c.18-.06.34-.22.66-.54l.9-.9c.69-.69 1.03-1.03 1.06-1.33a.8.8 0 0 0-.28-.67c-.23-.19-.71-.19-1.68-.19"/>
    </svg>
  )
);

BaseIconFolderDownIcon.displayName = 'BaseIconFolderDownIcon';

export default BaseIconFolderDownIcon;
