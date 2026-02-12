import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconText01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m15 16 2.536-7.328a1.02 1.02 0 0 1 1.928 0L22 16m-6.303-2h5.606M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392" })
    }
  )
);
IconText01Icon.displayName = "IconText01Icon";
var IconText01Icon_default = IconText01Icon;
export {
  IconText01Icon_default as default
};
