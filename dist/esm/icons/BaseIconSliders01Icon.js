import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconSliders01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 21v-6m0-8V3m7 18v-6m7 6v-4m0-8V3m-7 4V3m-2 5h4v3h-4zm7 5h4v3h-4zM3 11h4v3H3z" })
    }
  )
);
BaseIconSliders01Icon.displayName = "BaseIconSliders01Icon";
var BaseIconSliders01Icon_default = BaseIconSliders01Icon;
export {
  BaseIconSliders01Icon_default as default
};
