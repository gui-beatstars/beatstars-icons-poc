import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconListReorderIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19.88 6H4m8.925 6H4m15.88 6H4m16-3.757L16.902 12 20 10" })
    }
  )
);
IconListReorderIcon.displayName = "IconListReorderIcon";
var IconListReorderIcon_default = IconListReorderIcon;
export {
  IconListReorderIcon_default as default
};
