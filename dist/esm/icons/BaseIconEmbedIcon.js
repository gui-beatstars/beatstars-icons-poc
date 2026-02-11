import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconEmbedIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m15.5 15 3-3-3-3m-7 0-3 3 3 3M13 7l-2 10m11-5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" })
    }
  )
);
BaseIconEmbedIcon.displayName = "BaseIconEmbedIcon";
var BaseIconEmbedIcon_default = BaseIconEmbedIcon;
export {
  BaseIconEmbedIcon_default as default
};
