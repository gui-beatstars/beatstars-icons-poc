import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconSale01Icon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 8-8 8m1.2 4.6q.51-.05.92.25l1.2.92c.4.3.96.3 1.35 0l1.25-.96q.37-.28.82-.22l1.56.2c.5.07.98-.2 1.17-.67l.6-1.45q.18-.42.6-.6l1.45-.6c.47-.2.74-.67.68-1.17l-.2-1.5q-.05-.51.25-.92l.92-1.2c.3-.4.3-.96 0-1.35l-.96-1.25a1 1 0 0 1-.22-.82l.2-1.56a1.1 1.1 0 0 0-.67-1.17l-1.45-.6a1 1 0 0 1-.6-.6l-.6-1.46a1.1 1.1 0 0 0-1.17-.67l-1.56.2a1 1 0 0 1-.82-.21l-1.25-.96c-.4-.3-.95-.3-1.34 0l-1.25.96q-.37.27-.82.22L7.7 3.2a1.1 1.1 0 0 0-1.17.67l-.6 1.45q-.18.42-.6.6l-1.45.6c-.47.2-.74.67-.68 1.17l.2 1.56q.06.45-.21.82l-.96 1.25c-.3.4-.3.95 0 1.34l.96 1.25q.27.37.22.82l-.2 1.56c-.07.5.2.98.67 1.17l1.45.6q.42.18.6.6l.6 1.46c.2.46.67.74 1.17.67zM9.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m6 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
    </svg>
  )
);

BaseIconSale01Icon.displayName = 'BaseIconSale01Icon';

export default BaseIconSale01Icon;
