import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconGauge02Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.621 2.679a10 10 0 1 0 5.7 5.7m-7.9 2.2 5.6-5.6m-5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0" })
    }
  )
);
IconGauge02Icon.displayName = "IconGauge02Icon";
var IconGauge02Icon_default = IconGauge02Icon;
export {
  IconGauge02Icon_default as default
};
