import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconAlarmClockIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 3 2 6m20 0-3-3M6 19l-2 2m14-2 2 2M12 9v4l2 2m-2 6a8 8 0 1 0 0-16.001A8 8 0 0 0 12 21" })
    }
  )
);
IconAlarmClockIcon.displayName = "IconAlarmClockIcon";
var IconAlarmClockIcon_default = IconAlarmClockIcon;
export {
  IconAlarmClockIcon_default as default
};
