import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconArrowNarrowDownIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 4v16m0 0-6-6m6 6 6-6" })
    }
  )
);
IconArrowNarrowDownIcon.displayName = "IconArrowNarrowDownIcon";
var IconArrowNarrowDownIcon_default = IconArrowNarrowDownIcon;
export {
  IconArrowNarrowDownIcon_default as default
};
