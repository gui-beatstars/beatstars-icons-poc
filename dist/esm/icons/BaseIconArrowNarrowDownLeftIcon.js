import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconArrowNarrowDownLeftIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 6 6 18m0 0h8m-8 0v-8" })
    }
  )
);
BaseIconArrowNarrowDownLeftIcon.displayName = "BaseIconArrowNarrowDownLeftIcon";
var BaseIconArrowNarrowDownLeftIcon_default = BaseIconArrowNarrowDownLeftIcon;
export {
  BaseIconArrowNarrowDownLeftIcon_default as default
};
