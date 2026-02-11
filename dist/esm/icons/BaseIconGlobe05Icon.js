import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGlobe05Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 2.46a10 10 0 1 0 5.8 4.8M10.5 21.89v-2.2a.5.5 0 0 1 .12-.33l2.49-2.9a.5.5 0 0 0-.14-.76l-2.85-1.63-.19-.19-1.86-3.26a.5.5 0 0 0-.48-.25l-5.53.5M21 6c0 2.2-2 4-4 6-2-2-4-3.8-4-6a4 4 0 0 1 8 0m-3.75-.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0" })
    }
  )
);
BaseIconGlobe05Icon.displayName = "BaseIconGlobe05Icon";
var BaseIconGlobe05Icon_default = BaseIconGlobe05Icon;
export {
  BaseIconGlobe05Icon_default as default
};
