import { forwardRef } from 'react';
import type { IconProps } from '../types';

const IconWalletMusicIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.863 9.815h2.966m-.734 10.594v-5.117c0-.434.268-.825.676-.984l3.757-1.485c.706-.279 1.472.234 1.472.984v5.542m-12.091-.741H8.333c-2.217 0-3.325 0-4.172-.426a3.93 3.93 0 0 1-1.73-1.708C2 15.638 2 14.544 2 12.355V3.954m0 0c0 1.079.885 1.954 1.977 1.954h11.481c2.217 0 3.325 0 4.172.426.745.374 1.35.972 1.73 1.707.185.36.29.766.351 1.286M2 3.954C2 2.874 2.885 2 3.977 2H16.83c1.092 0 1.977.875 1.977 1.954v1.954m-3.182 13.375a1.58 1.58 0 0 1 0 2.251 1.625 1.625 0 0 1-2.278 0 1.58 1.58 0 0 1 0-2.25 1.625 1.625 0 0 1 2.278 0m5.905-1.06a1.58 1.58 0 0 1 0 2.25 1.625 1.625 0 0 1-2.278 0 1.58 1.58 0 0 1 0-2.25 1.624 1.624 0 0 1 2.278 0"/>
    </svg>
  )
);

IconWalletMusicIcon.displayName = 'IconWalletMusicIcon';

export default IconWalletMusicIcon;
