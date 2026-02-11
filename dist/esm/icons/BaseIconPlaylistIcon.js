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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.778 15.333H2m12.222-5.666H2M20.889 4H2m20 7.933L18.667 10.8v7.933m-.651-1.602c.868.885.868 2.32 0 3.205a2.19 2.19 0 0 1-3.143 0 2.3 2.3 0 0 1 0-3.205 2.19 2.19 0 0 1 3.143 0" })
    }
  )
);
BaseIconPlaylistIcon.displayName = "BaseIconPlaylistIcon";
var BaseIconPlaylistIcon_default = BaseIconPlaylistIcon;
export {
  BaseIconPlaylistIcon_default as default
};
