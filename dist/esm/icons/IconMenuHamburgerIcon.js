import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconMenuHamburgerIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 12h18M3 6h18M3 18h18" })
    }
  )
);
IconMenuHamburgerIcon.displayName = "IconMenuHamburgerIcon";
var IconMenuHamburgerIcon_default = IconMenuHamburgerIcon;
export {
  IconMenuHamburgerIcon_default as default
};
