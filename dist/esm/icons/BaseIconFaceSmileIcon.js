import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconFaceSmileIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 14s1.5 2 4 2 4-2 4-2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-6.5-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" })
    }
  )
);
BaseIconFaceSmileIcon.displayName = "BaseIconFaceSmileIcon";
var BaseIconFaceSmileIcon_default = BaseIconFaceSmileIcon;
export {
  BaseIconFaceSmileIcon_default as default
};
