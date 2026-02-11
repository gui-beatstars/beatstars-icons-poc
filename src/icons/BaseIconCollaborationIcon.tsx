import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCollaborationIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.22 10q.25-1.1.78-2.13m3.76-3.81A9 9 0 0 1 10 3.22m4 0q1.14.27 2.2.81m3.77 3.8q.56 1.04.8 2.17M3.23 14q.25 1.1.78 2.13m3.76 3.81q1.08.57 2.24.84m4 0q1.14-.27 2.2-.81m3.77-3.8q.56-1.04.8-2.17M7.28 3.73a2.5 2.5 0 1 1-3.54 3.54 2.5 2.5 0 0 1 3.54-3.54m13 0a2.5 2.5 0 1 1-3.54 3.54 2.5 2.5 0 0 1 3.54-3.54m-13 16.54a2.5 2.5 0 1 0-3.54-3.54 2.5 2.5 0 0 0 3.54 3.54m13 0a2.5 2.5 0 1 0-3.54-3.54 2.5 2.5 0 0 0 3.54 3.54"/>
    </svg>
  )
);

BaseIconCollaborationIcon.displayName = 'BaseIconCollaborationIcon';

export default BaseIconCollaborationIcon;
