import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconLightning01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14.25 2H8.49q-.25 0-.34.03l-.2.11q-.07.08-.17.3l-4.2 8.4c-.2.39-.29.58-.27.73q.04.21.21.34c.13.09.35.09.77.09h6.2L7.5 22 19.7 9.36c.4-.43.61-.64.62-.83a.5.5 0 0 0-.17-.41C20 8 19.7 8 19.12 8H12z" })
    }
  )
);
BaseIconLightning01Icon.displayName = "BaseIconLightning01Icon";
var BaseIconLightning01Icon_default = BaseIconLightning01Icon;
export {
  BaseIconLightning01Icon_default as default
};
