import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconDollarCircleIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8.5 14.67A2.33 2.33 0 0 0 10.83 17H13a2.5 2.5 0 0 0 0-5h-2a2.5 2.5 0 0 1 0-5h2.17a2.33 2.33 0 0 1 2.33 2.33M12 5.5V7m0 10v1.5M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0" })
    }
  )
);
BaseIconDollarCircleIcon.displayName = "BaseIconDollarCircleIcon";
var BaseIconDollarCircleIcon_default = BaseIconDollarCircleIcon;
export {
  BaseIconDollarCircleIcon_default as default
};
