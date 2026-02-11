import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconKey01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 9a2 2 0 0 0-2-2m0 8a6 6 0 1 0-5.95-5.2c.06.44.1.66.07.8a1 1 0 0 1-.12.34c-.06.12-.18.24-.42.48l-5.11 5.11c-.17.17-.26.26-.32.36a1 1 0 0 0-.12.3q-.04.13-.03.47v1.74c0 .56 0 .84.1 1.05a1 1 0 0 0 .45.44c.21.11.49.11 1.05.11H7v-2h2v-2h2l1.58-1.58c.24-.24.36-.36.48-.42.12-.08.2-.1.34-.12s.36 0 .8.07q.4.05.8.05" })
    }
  )
);
BaseIconKey01Icon.displayName = "BaseIconKey01Icon";
var BaseIconKey01Icon_default = BaseIconKey01Icon;
export {
  BaseIconKey01Icon_default as default
};
