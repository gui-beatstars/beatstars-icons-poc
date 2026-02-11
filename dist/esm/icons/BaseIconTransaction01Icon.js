import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconTransaction01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 15H4l4 4M4 9h16l-4-4" })
    }
  )
);
BaseIconTransaction01Icon.displayName = "BaseIconTransaction01Icon";
var BaseIconTransaction01Icon_default = BaseIconTransaction01Icon;
export {
  BaseIconTransaction01Icon_default as default
};
