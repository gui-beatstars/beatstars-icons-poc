import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconGenderNeutralIcon = forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ jsxs(
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
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 9h6v6h-1v7h-4v-7H9z" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4v2h-4V2h4z" })
      ]
    }
  )
);
IconGenderNeutralIcon.displayName = "IconGenderNeutralIcon";
var IconGenderNeutralIcon_default = IconGenderNeutralIcon;
export {
  IconGenderNeutralIcon_default as default
};
