import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconAddToListIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 5H3m8 7H3m13 7H3M18 9v6m3-3h-6" })
    }
  )
);
IconAddToListIcon.displayName = "IconAddToListIcon";
var IconAddToListIcon_default = IconAddToListIcon;
export {
  IconAddToListIcon_default as default
};
