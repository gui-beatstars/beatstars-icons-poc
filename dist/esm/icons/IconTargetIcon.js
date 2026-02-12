import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconTargetIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 8V5l3-3 1 2 2 1-3 3zm0 0-4 4m10 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m5 10a5 5 0 1 1-5-5" })
    }
  )
);
IconTargetIcon.displayName = "IconTargetIcon";
var IconTargetIcon_default = IconTargetIcon;
export {
  IconTargetIcon_default as default
};
