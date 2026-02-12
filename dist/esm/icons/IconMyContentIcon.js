import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconMyContentIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.5 19.5v-15m4.5 15v-15m4.5 15v-15l6 3v12z" })
    }
  )
);
IconMyContentIcon.displayName = "IconMyContentIcon";
var IconMyContentIcon_default = IconMyContentIcon;
export {
  IconMyContentIcon_default as default
};
