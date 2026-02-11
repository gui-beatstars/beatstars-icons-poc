import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconAlertIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12.01 9.02v4m9.71 5-8-14a2 2 0 0 0-3.47 0l-8 14a2 2 0 0 0 1.76 3H20a2 2 0 0 0 1.73-3" })
    }
  )
);
BaseIconAlertIcon.displayName = "BaseIconAlertIcon";
var BaseIconAlertIcon_default = BaseIconAlertIcon;
export {
  BaseIconAlertIcon_default as default
};
