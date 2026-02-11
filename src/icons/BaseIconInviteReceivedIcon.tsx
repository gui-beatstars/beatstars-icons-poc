import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconInviteReceivedIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3.5v7m0 0L15.5 7M12 10.5 8.5 7M2 12h3.882c.685 0 1.312.387 1.618 1s.933 1 1.618 1h5.764c.685 0 1.312-.387 1.618-1s.933-1 1.618-1H22M2 12V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4M2 12v3.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V12m0 0V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4"/>
    </svg>
  )
);

BaseIconInviteReceivedIcon.displayName = 'BaseIconInviteReceivedIcon';

export default BaseIconInviteReceivedIcon;
