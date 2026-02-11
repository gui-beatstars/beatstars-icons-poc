import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconChargebackIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 7h1.17a2.33 2.33 0 0 1 2.33 2.33M12 7h-1a2.5 2.5 0 0 0 0 5h2a2.5 2.5 0 0 1 0 5h-1m0-10V5.5M12 17h-1.17a2.33 2.33 0 0 1-2.33-2.33M12 17v1.5M2 10s2-2.73 3.63-4.36a9 9 0 1 1-2.28 8.86M2 10V6m0 4h4" })
    }
  )
);
BaseIconChargebackIcon.displayName = "BaseIconChargebackIcon";
var BaseIconChargebackIcon_default = BaseIconChargebackIcon;
export {
  BaseIconChargebackIcon_default as default
};
