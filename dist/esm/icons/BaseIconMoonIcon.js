import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconMoonIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 13.39A7.617 7.617 0 1 1 10.612 3C5.78 3.458 2 7.527 2 12.479A9.52 9.52 0 0 0 11.522 22c4.95 0 9.02-3.78 9.478-8.61" })
    }
  )
);
BaseIconMoonIcon.displayName = "BaseIconMoonIcon";
var BaseIconMoonIcon_default = BaseIconMoonIcon;
export {
  BaseIconMoonIcon_default as default
};
