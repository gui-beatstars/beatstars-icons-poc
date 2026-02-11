import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconPanelLeftCloseIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 3v18m7-12-3 3 3 3M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2" })
    }
  )
);
BaseIconPanelLeftCloseIcon.displayName = "BaseIconPanelLeftCloseIcon";
var BaseIconPanelLeftCloseIcon_default = BaseIconPanelLeftCloseIcon;
export {
  BaseIconPanelLeftCloseIcon_default as default
};
