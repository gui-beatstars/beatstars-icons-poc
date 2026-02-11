import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconClock01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0" })
    }
  )
);
BaseIconClock01Icon.displayName = "BaseIconClock01Icon";
var BaseIconClock01Icon_default = BaseIconClock01Icon;
export {
  BaseIconClock01Icon_default as default
};
