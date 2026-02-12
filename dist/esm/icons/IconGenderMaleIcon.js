import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconGenderMaleIcon = forwardRef(
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
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 9h6v6h-1l-1 7h-2l-1-7H9z" })
      ]
    }
  )
);
IconGenderMaleIcon.displayName = "IconGenderMaleIcon";
var IconGenderMaleIcon_default = IconGenderMaleIcon;
export {
  IconGenderMaleIcon_default as default
};
