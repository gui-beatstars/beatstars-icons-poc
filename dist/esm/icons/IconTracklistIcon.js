import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconTracklistIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8.5 15h-5M14 19.151v-5.823c0-.409.249-.777.629-.928l4.5-1.4a1 1 0 0 1 1.371.928v6.223M11.5 10h-8m16-5h-16m10.061 13.439a1.5 1.5 0 1 1-2.12 2.121 1.5 1.5 0 0 1 2.12-2.121m6.5-1a1.5 1.5 0 1 1-2.12 2.121 1.5 1.5 0 0 1 2.12-2.121" })
    }
  )
);
IconTracklistIcon.displayName = "IconTracklistIcon";
var IconTracklistIcon_default = IconTracklistIcon;
export {
  IconTracklistIcon_default as default
};
