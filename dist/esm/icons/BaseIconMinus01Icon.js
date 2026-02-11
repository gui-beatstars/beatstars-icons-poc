import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconMinus01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 12h14" })
    }
  )
);
BaseIconMinus01Icon.displayName = "BaseIconMinus01Icon";
var BaseIconMinus01Icon_default = BaseIconMinus01Icon;
export {
  BaseIconMinus01Icon_default as default
};
