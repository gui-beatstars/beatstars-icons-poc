import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCategoriesIcon = forwardRef(
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
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 6.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 17.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22 17.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0" })
      ]
    }
  )
);
IconCategoriesIcon.displayName = "IconCategoriesIcon";
var IconCategoriesIcon_default = IconCategoriesIcon;
export {
  IconCategoriesIcon_default as default
};
