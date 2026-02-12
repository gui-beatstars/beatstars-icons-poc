import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconMinimizeIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m22 3-5 5m0 0h5m-5 0V3M2 21l5-5m0 0H2m5 0v5M2 10V6a3 3 0 0 1 3-3h6.5M22 14v4a3 3 0 0 1-3 3h-6" })
    }
  )
);
IconMinimizeIcon.displayName = "IconMinimizeIcon";
var IconMinimizeIcon_default = IconMinimizeIcon;
export {
  IconMinimizeIcon_default as default
};
