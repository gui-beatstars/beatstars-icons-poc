import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconTypeTextIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 7c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C5.6 4 6.07 4 7 4h6c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08C16 5.6 16 6.07 16 7M7 20h6M10 4v16M20 4v16" })
    }
  )
);
BaseIconTypeTextIcon.displayName = "BaseIconTypeTextIcon";
var BaseIconTypeTextIcon_default = BaseIconTypeTextIcon;
export {
  BaseIconTypeTextIcon_default as default
};
