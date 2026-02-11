import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconRepeatOneIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 9v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h5m0 0L9 3m3 3L9 9m2 13h2m3-13V5l-1 1" })
    }
  )
);
BaseIconRepeatOneIcon.displayName = "BaseIconRepeatOneIcon";
var BaseIconRepeatOneIcon_default = BaseIconRepeatOneIcon;
export {
  BaseIconRepeatOneIcon_default as default
};
