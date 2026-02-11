import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconCloseCircleIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" })
    }
  )
);
BaseIconCloseCircleIcon.displayName = "BaseIconCloseCircleIcon";
var BaseIconCloseCircleIcon_default = BaseIconCloseCircleIcon;
export {
  BaseIconCloseCircleIcon_default as default
};
