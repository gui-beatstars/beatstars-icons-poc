import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconReplyIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 18v-2a4 4 0 0 0-4-4H4m0 0 5 5m-5-5 5-5" })
    }
  )
);
IconReplyIcon.displayName = "IconReplyIcon";
var IconReplyIcon_default = IconReplyIcon;
export {
  IconReplyIcon_default as default
};
