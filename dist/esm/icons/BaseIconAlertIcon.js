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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v4m8.21 7.5H4.25c-.9 0-1.36 0-1.62-.19a1 1 0 0 1-.4-.7c-.04-.32.18-.71.63-1.5L10.6 4.45c.45-.8.68-1.2.98-1.34a1 1 0 0 1 .82 0c.3.14.53.54.98 1.34l7.99 14.07c.24.42.36.64.39.8a1 1 0 0 1-.65 1.12c-.17.06-.4.06-.9.06" })
    }
  )
);
BaseIconAlertIcon.displayName = "BaseIconAlertIcon";
var BaseIconAlertIcon_default = BaseIconAlertIcon;
export {
  BaseIconAlertIcon_default as default
};
