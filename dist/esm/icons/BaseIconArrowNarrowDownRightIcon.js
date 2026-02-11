import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconArrowNarrowDownRightIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m6 6 12 12m0 0v-8m0 8h-8" })
    }
  )
);
BaseIconArrowNarrowDownRightIcon.displayName = "BaseIconArrowNarrowDownRightIcon";
var BaseIconArrowNarrowDownRightIcon_default = BaseIconArrowNarrowDownRightIcon;
export {
  BaseIconArrowNarrowDownRightIcon_default as default
};
