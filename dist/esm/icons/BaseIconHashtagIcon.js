import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconHashtagIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m9.5 3-3 18m11-18-3 18m6-13h-17m16 8h-17" })
    }
  )
);
BaseIconHashtagIcon.displayName = "BaseIconHashtagIcon";
var BaseIconHashtagIcon_default = BaseIconHashtagIcon;
export {
  BaseIconHashtagIcon_default as default
};
