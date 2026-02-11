import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconTargetIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 8V5l3-3 1 2 2 1-3 3zm0 0-4 4m10 0A10 10 0 1 1 12 2m5 10a5 5 0 1 1-5-5" })
    }
  )
);
BaseIconTargetIcon.displayName = "BaseIconTargetIcon";
var BaseIconTargetIcon_default = BaseIconTargetIcon;
export {
  BaseIconTargetIcon_default as default
};
