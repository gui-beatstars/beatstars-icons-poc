import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconCalendarDateIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 10H3m13-8v4M8 2v4m2.5 8 1.5-1v5m-1.25 0h2.5M7.8 22h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V8.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C18.71 4 17.87 4 16.2 4H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 6.29 3 7.13 3 8.8v8.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33" })
    }
  )
);
BaseIconCalendarDateIcon.displayName = "BaseIconCalendarDateIcon";
var BaseIconCalendarDateIcon_default = BaseIconCalendarDateIcon;
export {
  BaseIconCalendarDateIcon_default as default
};
