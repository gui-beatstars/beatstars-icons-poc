import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGenreRockIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.48 11.5v-1a1.5 1.5 0 1 1 3 0m0 0V12m0-1.5a1.5 1.5 0 1 1 3 0V12 5.5a1.5 1.5 0 1 1 3 0V16a6 6 0 0 1-6 6h-2 .2a6 6 0 0 1-5.2-3q-.46-.72-3.29-5.73a1.5 1.5 0 0 1 .54-2.02 1.9 1.9 0 0 1 2.28.28L7.48 13V4.5a1.5 1.5 0 1 1 3 0V12" })
    }
  )
);
BaseIconGenreRockIcon.displayName = "BaseIconGenreRockIcon";
var BaseIconGenreRockIcon_default = BaseIconGenreRockIcon;
export {
  BaseIconGenreRockIcon_default as default
};
