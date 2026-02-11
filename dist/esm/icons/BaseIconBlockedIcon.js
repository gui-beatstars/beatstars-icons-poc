import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconBlockedIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19.07 4.93A10 10 0 0 1 4.93 19.07M19.07 4.93A10 10 0 0 0 4.93 19.07M19.07 4.93 4.93 19.07" })
    }
  )
);
BaseIconBlockedIcon.displayName = "BaseIconBlockedIcon";
var BaseIconBlockedIcon_default = BaseIconBlockedIcon;
export {
  BaseIconBlockedIcon_default as default
};
