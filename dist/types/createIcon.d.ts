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
export declare function createIcon({ displayName, viewBox, path, }: {
    displayName: string;
    viewBox?: string;
    path: string;
}): import("react").ForwardRefExoticComponent<IconProps & import("react").RefAttributes<SVGSVGElement>>;
