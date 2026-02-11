import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconToggleOffIcon = forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ jsxs(
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
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" })
      ]
    }
  )
);
BaseIconToggleOffIcon.displayName = "BaseIconToggleOffIcon";
var BaseIconToggleOffIcon_default = BaseIconToggleOffIcon;
export {
  BaseIconToggleOffIcon_default as default
};
