import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconSkipBackIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 4v16m12.681-1.155-7.454-5.4c-.682-.494-1.022-.741-1.146-1.04a1.05 1.05 0 0 1 0-.81c.124-.299.464-.546 1.146-1.04l7.454-5.4C17.744 4.385 18.275 4 18.721 4c.39 0 .758.16 1 .435C20 4.75 20 5.367 20 6.6v10.8c0 1.233 0 1.849-.279 2.165a1.33 1.33 0 0 1-1 .435c-.446 0-.977-.385-2.04-1.155" })
    }
  )
);
IconSkipBackIcon.displayName = "IconSkipBackIcon";
var IconSkipBackIcon_default = IconSkipBackIcon;
export {
  IconSkipBackIcon_default as default
};
