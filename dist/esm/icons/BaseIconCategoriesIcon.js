import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconCategoriesIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeWidth: "2", d: "M16 6.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-6 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm12 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" })
    }
  )
);
BaseIconCategoriesIcon.displayName = "BaseIconCategoriesIcon";
var BaseIconCategoriesIcon_default = BaseIconCategoriesIcon;
export {
  BaseIconCategoriesIcon_default as default
};
