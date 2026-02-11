import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconQueueIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 6.5H10.5M21 13H3m18 6.5H3m4-13-4-2v4z" })
    }
  )
);
BaseIconQueueIcon.displayName = "BaseIconQueueIcon";
var BaseIconQueueIcon_default = BaseIconQueueIcon;
export {
  BaseIconQueueIcon_default as default
};
