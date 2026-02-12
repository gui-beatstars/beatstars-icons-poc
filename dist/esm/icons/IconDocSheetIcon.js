import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconDocSheetIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-6-6a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8m-6-6v5a1 1 0 0 0 1 1h5M8 13h2m4 0h2m-8 4h2m4 0h2" })
    }
  )
);
IconDocSheetIcon.displayName = "IconDocSheetIcon";
var IconDocSheetIcon_default = IconDocSheetIcon;
export {
  IconDocSheetIcon_default as default
};
