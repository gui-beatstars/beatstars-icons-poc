import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGenderNeutralIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "2", d: "M9 9h6v6h-1v7h-4v-7H9zm5-5v2h-4V2h4z" })
    }
  )
);
BaseIconGenderNeutralIcon.displayName = "BaseIconGenderNeutralIcon";
var BaseIconGenderNeutralIcon_default = BaseIconGenderNeutralIcon;
export {
  BaseIconGenderNeutralIcon_default as default
};
