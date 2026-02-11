import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconRatio21Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 3h14v18H5z" })
    }
  )
);
BaseIconRatio21Icon.displayName = "BaseIconRatio21Icon";
var BaseIconRatio21Icon_default = BaseIconRatio21Icon;
export {
  BaseIconRatio21Icon_default as default
};
