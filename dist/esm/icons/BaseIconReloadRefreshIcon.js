import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconReloadRefreshIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2 10s2-2.73 3.63-4.36a9 9 0 1 1-2.28 8.86M2 10V4m0 6h6" })
    }
  )
);
BaseIconReloadRefreshIcon.displayName = "BaseIconReloadRefreshIcon";
var BaseIconReloadRefreshIcon_default = BaseIconReloadRefreshIcon;
export {
  BaseIconReloadRefreshIcon_default as default
};
