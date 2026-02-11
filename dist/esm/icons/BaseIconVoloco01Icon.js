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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeWidth: "2", d: "M10.234 5.17 11.6 9.083l1.826-4.565a1 1 0 0 1 .62-.58l3.876-1.262a1 1 0 0 1 1.232 1.338l-6.647 15.827c-.341.812-1.489.819-1.84.011L4.607 5.898A1 1 0 0 1 5.525 4.5H9.29a1 1 0 0 1 .944.67Z" })
    }
  )
);
BaseIconVoloco01Icon.displayName = "BaseIconVoloco01Icon";
var BaseIconVoloco01Icon_default = BaseIconVoloco01Icon;
export {
  BaseIconVoloco01Icon_default as default
};
