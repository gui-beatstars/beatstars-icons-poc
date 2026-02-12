import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconReplaceIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 11V8a2 2 0 0 0-2-2h-6l3-3M3 13v3a2 2 0 0 0 2 2h6l-3 3M4 3h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m12 12h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1" })
    }
  )
);
IconReplaceIcon.displayName = "IconReplaceIcon";
var IconReplaceIcon_default = IconReplaceIcon;
export {
  IconReplaceIcon_default as default
};
