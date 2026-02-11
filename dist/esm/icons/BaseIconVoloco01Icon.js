import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconVoloco01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeWidth: "2", d: "m10.23 5.17 1.37 3.91 1.83-4.56a1 1 0 0 1 .62-.58l3.87-1.26A1 1 0 0 1 19.15 4l-6.64 15.83a1 1 0 0 1-1.84.01L4.6 5.9a1 1 0 0 1 .91-1.4H9.3a1 1 0 0 1 .94.67Z" })
    }
  )
);
BaseIconVoloco01Icon.displayName = "BaseIconVoloco01Icon";
var BaseIconVoloco01Icon_default = BaseIconVoloco01Icon;
export {
  BaseIconVoloco01Icon_default as default
};
