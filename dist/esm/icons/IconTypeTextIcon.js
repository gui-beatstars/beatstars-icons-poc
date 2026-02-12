import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconTypeTextIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 7c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C5.602 4 6.068 4 7 4h6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C16 5.602 16 6.068 16 7M7 20h6M10 4v16M20 4v16" })
    }
  )
);
IconTypeTextIcon.displayName = "IconTypeTextIcon";
var IconTypeTextIcon_default = IconTypeTextIcon;
export {
  IconTypeTextIcon_default as default
};
