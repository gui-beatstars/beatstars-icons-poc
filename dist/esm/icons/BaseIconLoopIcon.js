import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconLoopIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18.18 8c5.1 0 5.1 8 0 8S11.04 8 5.44 8c-4.59 0-4.59 8 0 8 5.6 0 7.64-8 12.74-8" })
    }
  )
);
BaseIconLoopIcon.displayName = "BaseIconLoopIcon";
var BaseIconLoopIcon_default = BaseIconLoopIcon;
export {
  BaseIconLoopIcon_default as default
};
