import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconRefreshIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 18.87A8.49 8.49 0 0 0 12 3.5h-.5m.5 17A8.5 8.5 0 0 1 7 5.13m4 17.27 2-2-2-2m2-12.8-2-2 2-2" })
    }
  )
);
BaseIconRefreshIcon.displayName = "BaseIconRefreshIcon";
var BaseIconRefreshIcon_default = BaseIconRefreshIcon;
export {
  BaseIconRefreshIcon_default as default
};
