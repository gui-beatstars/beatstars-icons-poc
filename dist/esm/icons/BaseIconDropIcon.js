import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconDropIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 14a8 8 0 1 1-15.42-3C5.77 8.07 12 2 12 2s6.23 6.07 7.42 9q.57 1.4.58 3" })
    }
  )
);
BaseIconDropIcon.displayName = "BaseIconDropIcon";
var BaseIconDropIcon_default = BaseIconDropIcon;
export {
  BaseIconDropIcon_default as default
};
