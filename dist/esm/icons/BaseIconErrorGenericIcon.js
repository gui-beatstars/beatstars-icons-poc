import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconErrorGenericIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 8h18M10 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5m-2.5 8.79-3.28-3.28m0 3.28 3.28-3.28M17 12a5 5 0 1 1-3.67 1.61M22 17a5 5 0 1 1-1.6-3.67M5.78 5.49" })
    }
  )
);
BaseIconErrorGenericIcon.displayName = "BaseIconErrorGenericIcon";
var BaseIconErrorGenericIcon_default = BaseIconErrorGenericIcon;
export {
  BaseIconErrorGenericIcon_default as default
};
