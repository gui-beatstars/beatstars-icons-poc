import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconUnlistedIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 7h8.5m4 0H20m-5.5 5H20m-7.5 5H20M4 12h7m-3.152 8.664 6.306-17.328M4 17h5" })
    }
  )
);
IconUnlistedIcon.displayName = "IconUnlistedIcon";
var IconUnlistedIcon_default = IconUnlistedIcon;
export {
  IconUnlistedIcon_default as default
};
