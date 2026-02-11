import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconShareExternalOpenIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 9V3m0 0h-6m6 0-8 8m-3-6H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 7.29 3 8.13 3 9.8v6.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33h6.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V14" })
    }
  )
);
BaseIconShareExternalOpenIcon.displayName = "BaseIconShareExternalOpenIcon";
var BaseIconShareExternalOpenIcon_default = BaseIconShareExternalOpenIcon;
export {
  BaseIconShareExternalOpenIcon_default as default
};
