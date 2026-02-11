import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconSend01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 12H5m-.08.3-2.34 6.97c-.18.54-.27.82-.2.99a.5.5 0 0 0 .32.3c.18.05.44-.07.97-.31l16.7-7.52c.52-.23.78-.35.86-.5a.5.5 0 0 0 0-.45c-.08-.16-.34-.28-.85-.5L3.66 3.74c-.52-.24-.79-.36-.96-.3a.5.5 0 0 0-.33.3c-.07.16.02.43.2.98l2.35 7.06.05.18v.13q0 .06-.05.2"/>
    </svg>
  )
);

BaseIconSend01Icon.displayName = 'BaseIconSend01Icon';

export default BaseIconSend01Icon;
