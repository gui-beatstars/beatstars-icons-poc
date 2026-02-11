import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * Factory function to create an icon component from raw SVG path data.
 * Useful if you want to add icons programmatically without the build step.
 * 
 * @example
 * const CustomIcon = createIcon({
 *   displayName: 'CustomIcon',
 *   viewBox: '0 0 24 24',
 *   path: '<path d="M12 2L2 22h20L12 2z" fill="currentColor" />',
 * });
 */
export function createIcon({
  displayName,
  viewBox = '0 0 24 24',
  path,
}: {
  displayName: string;
  viewBox?: string;
  path: string;
}) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, color = 'currentColor', strokeWidth, className, style, ...rest }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        className={className}
        style={style}
        {...rest}
        dangerouslySetInnerHTML={{ __html: path }}
      />
    )
  );

  Icon.displayName = displayName;
  return Icon;
}
