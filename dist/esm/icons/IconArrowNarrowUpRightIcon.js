import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconArrowNarrowUpRightIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18 18 6m0 0h-8m8 0v8" })
    }
  )
);
IconArrowNarrowUpRightIcon.displayName = "IconArrowNarrowUpRightIcon";
var IconArrowNarrowUpRightIcon_default = IconArrowNarrowUpRightIcon;
export {
  IconArrowNarrowUpRightIcon_default as default
};
