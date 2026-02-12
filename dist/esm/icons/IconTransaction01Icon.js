import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconTransaction01Icon = forwardRef(
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
IconTransaction01Icon.displayName = "IconTransaction01Icon";
var IconTransaction01Icon_default = IconTransaction01Icon;
export {
  IconTransaction01Icon_default as default
};
