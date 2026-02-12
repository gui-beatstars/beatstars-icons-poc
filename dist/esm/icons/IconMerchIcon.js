import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconMerchIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.5 2.02A2.98 2.98 0 0 1 12.52 5h-1.04A2.98 2.98 0 0 1 8.5 2.02m9.488 10.976 3.241-.764a1 1 0 0 0 .74-1.215l-1.295-5.183a4 4 0 0 0-2.166-2.644l-1.694-.804A4 4 0 0 0 15.099 2H8.901a4 4 0 0 0-1.715.386l-1.694.804a4 4 0 0 0-2.166 2.644L2.03 11.017a1 1 0 0 0 .741 1.215l3.217.758M6 10v8.543c-.01.898.588 1.69 1.454 1.927 2.99.707 6.103.707 9.092 0A1.974 1.974 0 0 0 18 18.543V10" })
    }
  )
);
IconMerchIcon.displayName = "IconMerchIcon";
var IconMerchIcon_default = IconMerchIcon;
export {
  IconMerchIcon_default as default
};
