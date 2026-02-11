import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconMyContentIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.5 19.5v-15m4.5 15v-15m4.5 15v-15l6 3v12z" })
    }
  )
);
BaseIconMyContentIcon.displayName = "BaseIconMyContentIcon";
var BaseIconMyContentIcon_default = BaseIconMyContentIcon;
export {
  BaseIconMyContentIcon_default as default
};
