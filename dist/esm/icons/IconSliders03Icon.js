import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconSliders03Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 10V3M5 12V3m16 11h-4M7 16H3m9 5v-9m-7 9v-5m14 5v-7m-5-6h-4m2 0V3" })
    }
  )
);
IconSliders03Icon.displayName = "IconSliders03Icon";
var IconSliders03Icon_default = IconSliders03Icon;
export {
  IconSliders03Icon_default as default
};
