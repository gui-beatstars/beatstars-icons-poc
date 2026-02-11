import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconPlaylistIcon = forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      className,
      style,
      ...rest,
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.78 15.33H2m12.22-5.66H2M20.89 4H2m20 7.93-3.33-1.13v7.93m-.65-1.6a2.3 2.3 0 0 1 0 3.2 2.2 2.2 0 0 1-3.15 0 2.3 2.3 0 0 1 0-3.2 2.2 2.2 0 0 1 3.15 0" })
    }
  )
);
BaseIconPlaylistIcon.displayName = "BaseIconPlaylistIcon";
var BaseIconPlaylistIcon_default = BaseIconPlaylistIcon;
export {
  BaseIconPlaylistIcon_default as default
};
