import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconDotList01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 6h12M9 12h12M9 18h12M4 6h.02M4 12h.02M4 18h.02M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
    }
  )
);
IconDotList01Icon.displayName = "IconDotList01Icon";
var IconDotList01Icon_default = IconDotList01Icon;
export {
  IconDotList01Icon_default as default
};
