import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconExclamationIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 8v4m0 4h.01M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12" })
    }
  )
);
BaseIconExclamationIcon.displayName = "BaseIconExclamationIcon";
var BaseIconExclamationIcon_default = BaseIconExclamationIcon;
export {
  BaseIconExclamationIcon_default as default
};
