import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconScanIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" })
    }
  )
);
BaseIconScanIcon.displayName = "BaseIconScanIcon";
var BaseIconScanIcon_default = BaseIconScanIcon;
export {
  BaseIconScanIcon_default as default
};
