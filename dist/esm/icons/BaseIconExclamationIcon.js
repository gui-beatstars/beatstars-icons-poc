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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 8v4m10 0a10 10 0 1 0-20 0 10 10 0 0 0 20 0" })
    }
  )
);
BaseIconExclamationIcon.displayName = "BaseIconExclamationIcon";
var BaseIconExclamationIcon_default = BaseIconExclamationIcon;
export {
  BaseIconExclamationIcon_default as default
};
