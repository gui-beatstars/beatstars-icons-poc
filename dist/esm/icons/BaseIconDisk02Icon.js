import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconDisk02Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 5.67A7 7 0 0 1 19 12M8.4 18A7 7 0 0 1 5 12m17 0a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-7 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" })
    }
  )
);
BaseIconDisk02Icon.displayName = "BaseIconDisk02Icon";
var BaseIconDisk02Icon_default = BaseIconDisk02Icon;
export {
  BaseIconDisk02Icon_default as default
};
