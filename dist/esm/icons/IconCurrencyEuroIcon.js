import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCurrencyEuroIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 5.519a8.5 8.5 0 1 0 0 12.962M3 14h10M3 10h10" })
    }
  )
);
IconCurrencyEuroIcon.displayName = "IconCurrencyEuroIcon";
var IconCurrencyEuroIcon_default = IconCurrencyEuroIcon;
export {
  IconCurrencyEuroIcon_default as default
};
