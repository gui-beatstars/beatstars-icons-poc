import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconRepeatOneIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 9v5.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 19 16.88 19 15.2 19H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 16.72 4 15.88 4 14.2V10c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C6.605 6 7.07 6 8 6h4m0 0L9 3m3 3L9 9m2 13h2m3-13V5l-1 1" })
    }
  )
);
IconRepeatOneIcon.displayName = "IconRepeatOneIcon";
var IconRepeatOneIcon_default = IconRepeatOneIcon;
export {
  IconRepeatOneIcon_default as default
};
