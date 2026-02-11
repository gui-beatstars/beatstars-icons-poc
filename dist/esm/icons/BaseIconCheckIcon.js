import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconCheckIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 6 9 17l-5-5" })
    }
  )
);
BaseIconCheckIcon.displayName = "BaseIconCheckIcon";
var BaseIconCheckIcon_default = BaseIconCheckIcon;
export {
  BaseIconCheckIcon_default as default
};
