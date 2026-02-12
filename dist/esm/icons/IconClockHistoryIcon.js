import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconClockHistoryIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m22.7 13.5-2-2-2 2M21 12a9 9 0 1 1-1.245-4.57M12 7v5l3 2" })
    }
  )
);
IconClockHistoryIcon.displayName = "IconClockHistoryIcon";
var IconClockHistoryIcon_default = IconClockHistoryIcon;
export {
  IconClockHistoryIcon_default as default
};
