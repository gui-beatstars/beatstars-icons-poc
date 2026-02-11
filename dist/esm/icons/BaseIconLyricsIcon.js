import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconLyricsIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 8.5h3M4 14h16M4 19h16M13 4h7m-7 5h7M9 10 7.26 4.2a.3.3 0 0 0-.24-.2H5.98q-.17.01-.24.2L4 10" })
    }
  )
);
BaseIconLyricsIcon.displayName = "BaseIconLyricsIcon";
var BaseIconLyricsIcon_default = BaseIconLyricsIcon;
export {
  BaseIconLyricsIcon_default as default
};
