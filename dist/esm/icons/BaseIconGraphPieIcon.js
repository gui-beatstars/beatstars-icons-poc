import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGraphPieIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.2 14c.28 0 .42 0 .53.06q.15.09.22.24c.05.12.04.25.01.5A8 8 0 1 1 9.2 6.04c.25-.03.38-.04.5.01q.16.07.24.22c.06.11.06.25.06.53v6.4c0 .28 0 .42.05.53q.08.15.22.22c.11.05.25.05.53.05zM14 2.8c0-.28 0-.42.06-.53q.09-.15.24-.22c.12-.05.25-.04.5-.01a8 8 0 0 1 7.16 7.16c.03.25.04.38-.01.5q-.07.16-.22.24c-.11.06-.25.06-.53.06h-6.4c-.28 0-.42 0-.53-.05a.5.5 0 0 1-.22-.22C14 9.62 14 9.48 14 9.2z" })
    }
  )
);
BaseIconGraphPieIcon.displayName = "BaseIconGraphPieIcon";
var BaseIconGraphPieIcon_default = BaseIconGraphPieIcon;
export {
  BaseIconGraphPieIcon_default as default
};
