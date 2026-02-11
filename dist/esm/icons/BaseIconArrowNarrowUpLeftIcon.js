import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconArrowNarrowUpLeftIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 18 6 6m0 0v8m0-8h8" })
    }
  )
);
BaseIconArrowNarrowUpLeftIcon.displayName = "BaseIconArrowNarrowUpLeftIcon";
var BaseIconArrowNarrowUpLeftIcon_default = BaseIconArrowNarrowUpLeftIcon;
export {
  BaseIconArrowNarrowUpLeftIcon_default as default
};
