import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconNotificationBoxIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 4H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 6.29 3 7.13 3 8.8v7.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33h7.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V13m.12-9.12a3 3 0 1 1-4.24 4.24 3 3 0 0 1 4.24-4.24" })
    }
  )
);
BaseIconNotificationBoxIcon.displayName = "BaseIconNotificationBoxIcon";
var BaseIconNotificationBoxIcon_default = BaseIconNotificationBoxIcon;
export {
  BaseIconNotificationBoxIcon_default as default
};
