import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconStarIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.28 3.45c.23-.46.35-.7.5-.77a.5.5 0 0 1 .44 0c.15.07.27.3.5.77l2.18 4.43q.09.2.16.26.07.07.15.12c.07.03.14.04.3.06l4.89.72c.51.07.77.1.89.23q.15.18.13.41c-.02.18-.2.36-.58.72l-3.54 3.45q-.15.14-.2.22l-.06.18c0 .08 0 .15.03.3l.84 4.87c.08.52.13.77.05.92a.5.5 0 0 1-.35.26c-.17.03-.4-.1-.86-.33l-4.38-2.3q-.18-.11-.27-.13h-.2q-.09.02-.27.13l-4.38 2.3c-.46.24-.69.36-.86.33a.5.5 0 0 1-.35-.26c-.08-.15-.03-.4.05-.92l.84-4.87c.02-.15.04-.22.03-.3l-.06-.18a1 1 0 0 0-.2-.22L3.16 10.4c-.37-.36-.56-.54-.58-.72a.5.5 0 0 1 .13-.4c.12-.13.38-.17.9-.24l4.88-.72c.16-.02.23-.03.3-.06l.15-.12q.06-.06.16-.26z"/>
    </svg>
  )
);

BaseIconStarIcon.displayName = 'BaseIconStarIcon';

export default BaseIconStarIcon;
