import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconRotateLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth, className, style, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={style}
      {...rest}
    >
      <path fill="currentColor" d="M5 9.2a1 1 0 0 0-2 0zm.1 11.58.45-.89zm-.88-.87.89-.46zm15.56 0-.89-.46zm-.87.87-.46-.89zM16.8 6V5zm2.1.22-.45.89zm.88.87-.89.46zM11 6l-.7-.7a1 1 0 0 0 0 1.4zm3.7-2.3a1 1 0 0 0-1.4-1.4l.7.7zm-1.4 6a1 1 0 0 0 1.4-1.4L14 9zm6.7-.5h-1v8.6h2V9.2zM16.8 21v-1H7.2v2h9.6zM4 17.8h1V9.2H3v8.6zM7.2 21v-1c-.58 0-.95 0-1.23-.02a1 1 0 0 1-.42-.09l-.46.9-.45.88c.38.2.77.27 1.16.3q.59.04 1.4.03zM4 17.8H3q0 .81.03 1.4c.03.39.1.78.3 1.16l.89-.45.89-.46a1 1 0 0 1-.09-.42A17 17 0 0 1 5 17.8zm1.1 2.98.45-.89a1 1 0 0 1-.44-.44l-.9.46-.88.45a3 3 0 0 0 1.3 1.31zM20 17.8h-1c0 .58 0 .95-.02 1.23-.03.27-.06.37-.09.42l.9.46.88.45c.2-.38.27-.77.3-1.16q.04-.59.03-1.4zM16.8 21v1q.81 0 1.4-.03c.39-.03.78-.1 1.16-.3l-.45-.89-.46-.89c-.05.03-.15.06-.42.09-.28.02-.65.02-1.23.02zm2.98-1.1-.89-.45a1 1 0 0 1-.44.44l.46.9.45.88a3 3 0 0 0 1.31-1.3zM16.8 6v1c.58 0 .95 0 1.23.02.27.03.37.06.42.09l.46-.9.45-.88a3 3 0 0 0-1.16-.3Q17.6 5 16.8 5zM20 9.2h1q0-.81-.03-1.4a3 3 0 0 0-.3-1.16l-.89.45-.89.46c.03.05.06.15.09.42.02.28.02.65.02 1.23zm-1.1-2.98-.45.89a1 1 0 0 1 .44.44l.9-.46.88-.45a3 3 0 0 0-1.3-1.31zM16.8 6V5H11v2h5.8zM14 3l-.7-.7-3 3 .7.7.7.7 3-3zm-3 3-.7.7 3 3L14 9l.7-.7-3-3z"/>
    </svg>
  )
);

BaseIconRotateLeftIcon.displayName = 'BaseIconRotateLeftIcon';

export default BaseIconRotateLeftIcon;
