import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BaseIconTagPriceIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.062 7.107h.01m3.605 3.57.575-.574c.634-.635 1.639-.66 2.243-.055m-2.818.63-.492.492c-.68.68-.706 1.756-.058 2.404s1.724.621 2.403-.059l.985-.985c.68-.68 1.757-.705 2.404-.058.648.648.622 1.724-.058 2.404l-.492.493m-4.692-4.692-.703-.703m5.395 5.395-.575.574c-.635.635-1.639.66-2.244.055m2.819-.63.703.704M4.78 3.221 3.175 4.825c-.341.342-.512.512-.634.712a2 2 0 0 0-.236.57c-.055.227-.055.469-.055.952V9.87c0 .482 0 .724.055.95q.073.305.236.572c.122.199.293.37.634.71l7.569 7.57c1.172 1.172 1.759 1.758 2.435 1.978a2.96 2.96 0 0 0 1.83 0c.676-.22 1.262-.806 2.435-1.979l2.183-2.183c1.172-1.172 1.758-1.758 1.978-2.434a2.96 2.96 0 0 0 0-1.83c-.22-.676-.806-1.263-1.978-2.435l-7.57-7.569c-.34-.341-.511-.512-.71-.634a2 2 0 0 0-.571-.237c-.227-.054-.469-.054-.951-.054H7.013c-.483 0-.725 0-.952.054a2 2 0 0 0-.57.237c-.2.122-.37.293-.712.634m2.776 3.886a.493.493 0 1 1-.987 0 .493.493 0 0 1 .987 0"/>
    </svg>
  )
);

BaseIconTagPriceIcon.displayName = 'BaseIconTagPriceIcon';

export default BaseIconTagPriceIcon;
