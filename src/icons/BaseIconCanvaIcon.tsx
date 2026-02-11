import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCanvaIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeWidth="2" d="M19.343 17.3a9 9 0 0 0 .22-.343l.203-.319a1.23 1.23 0 0 0 .205-.98.84.84 0 0 0-.297-.47.9.9 0 0 0-.53-.194.84.84 0 0 0-.444.11.8.8 0 0 0-.316.324l-.08.122q-.066.105-.128.209l-.002.002-.015.025a10 10 0 0 1-.159.256c-.912 1.396-1.63 2.015-3.33 2.88a5.7 5.7 0 0 1-2.47.602c-2.188 0-3.575-1.647-4.213-3.293a7 7 0 0 1-.23-.705 8 8 0 0 1-.234-1.483c-.194-2.94 1.068-6.19 2.64-8.173 1.046-1.322 2.214-2.084 3.205-2.088.267.009.529.079.763.204.234.126.434.305.583.52.52.813.689 1.498.097 2.784v.002a.85.85 0 0 0-.023.61.87.87 0 0 0 .397.474.77.77 0 0 0 .452.084q.193-.02.4-.136c.288-.16.595-.457.914-.902.698-.971.743-2.497.103-3.474C16.264 2.747 14.735 2 13.034 2a6.57 6.57 0 0 0-3.356.952c-4.077 2.505-6.46 8.2-5.444 12.863a10 10 0 0 0 .167.653c.471 1.58 1.408 2.998 2.594 3.923C7.488 20.77 9.255 22 11.4 22h.025c2.161-.01 3.802-.901 4.854-1.575 1.148-.743 2.149-1.765 3.065-3.125Z" clipRule="evenodd"/>
    </svg>
  )
);

BaseIconCanvaIcon.displayName = 'BaseIconCanvaIcon';

export default BaseIconCanvaIcon;
