import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGlobe02Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10m0-20a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10m0-20a10 10 0 1 0 0 20m0-20a10 10 0 0 1 0 20M2.5 9h19m-19 6h19" })
    }
  )
);
BaseIconGlobe02Icon.displayName = "BaseIconGlobe02Icon";
var BaseIconGlobe02Icon_default = BaseIconGlobe02Icon;
export {
  BaseIconGlobe02Icon_default as default
};
