import type { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Icon size in pixels. Sets both width and height.
   * @default 24
   */
  size?: number | string;

  /**
   * Icon color. Accepts any valid CSS color value.
   * @default 'currentColor'
   */
  color?: string;

  /**
   * Stroke width for line-style icons.
   * @default undefined (uses SVG's own stroke-width)
   */
  strokeWidth?: number | string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
