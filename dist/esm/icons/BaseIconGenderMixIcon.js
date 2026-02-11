import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGenderMixIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "2", d: "M8 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 9h6v6H8l-1 7H5l-1-7H3zm16-5v2h-4V4a2 2 0 1 1 4 0Zm-4 5h4l2 8.5h-2V22h-4v-4.5h-2z" })
    }
  )
);
BaseIconGenderMixIcon.displayName = "BaseIconGenderMixIcon";
var BaseIconGenderMixIcon_default = BaseIconGenderMixIcon;
export {
  BaseIconGenderMixIcon_default as default
};
