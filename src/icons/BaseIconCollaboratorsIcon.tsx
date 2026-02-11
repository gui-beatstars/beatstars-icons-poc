import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconCollaboratorsIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm11 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM4 22.5v-12l.4.2a17 17 0 0 0 15.2 0l.4-.2v12h-5v-7l-1.52.25a9 9 0 0 1-2.96 0L9 15.5v7z"/>
    </svg>
  )
);

BaseIconCollaboratorsIcon.displayName = 'BaseIconCollaboratorsIcon';

export default BaseIconCollaboratorsIcon;
