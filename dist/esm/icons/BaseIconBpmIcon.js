import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconBpmIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2 12.952h4L9 22l6-20 3 11.048L22 13" })
    }
  )
);
BaseIconBpmIcon.displayName = "BaseIconBpmIcon";
var BaseIconBpmIcon_default = BaseIconBpmIcon;
export {
  BaseIconBpmIcon_default as default
};
