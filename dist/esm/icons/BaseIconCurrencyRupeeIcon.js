import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconCurrencyRupeeIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 3h12M6 8h12m-3.5 13L6 13h3c6.667 0 6.667-10 0-10" })
    }
  )
);
BaseIconCurrencyRupeeIcon.displayName = "BaseIconCurrencyRupeeIcon";
var BaseIconCurrencyRupeeIcon_default = BaseIconCurrencyRupeeIcon;
export {
  BaseIconCurrencyRupeeIcon_default as default
};
