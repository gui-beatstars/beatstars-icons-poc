import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconGenderFemaleIcon = forwardRef(
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
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4v2h-4V4a2 2 0 1 1 4 0" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 9h4l2 8.5h-2V22h-4v-4.5H8z" })
      ]
    }
  )
);
IconGenderFemaleIcon.displayName = "IconGenderFemaleIcon";
var IconGenderFemaleIcon_default = IconGenderFemaleIcon;
export {
  IconGenderFemaleIcon_default as default
};
