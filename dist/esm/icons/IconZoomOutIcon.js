import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconZoomOutIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m21 21-4.35-4.35M8 11h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0" })
    }
  )
);
IconZoomOutIcon.displayName = "IconZoomOutIcon";
var IconZoomOutIcon_default = IconZoomOutIcon;
export {
  IconZoomOutIcon_default as default
};
