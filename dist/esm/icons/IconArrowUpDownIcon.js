import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconArrowUpDownIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m21 16-4 4m0 0-4-4m4 4V4M3 8l4-4m0 0 4 4M7 4v16" })
    }
  )
);
IconArrowUpDownIcon.displayName = "IconArrowUpDownIcon";
var IconArrowUpDownIcon_default = IconArrowUpDownIcon;
export {
  IconArrowUpDownIcon_default as default
};
