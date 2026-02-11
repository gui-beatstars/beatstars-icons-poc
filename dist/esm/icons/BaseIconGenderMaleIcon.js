import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGenderMaleIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 9h6v6h-1l-1 7h-2l-1-7H9z" })
    }
  )
);
BaseIconGenderMaleIcon.displayName = "BaseIconGenderMaleIcon";
var BaseIconGenderMaleIcon_default = BaseIconGenderMaleIcon;
export {
  BaseIconGenderMaleIcon_default as default
};
