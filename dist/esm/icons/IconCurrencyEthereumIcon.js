import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCurrencyEthereumIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m4 11 8 2 8-2M4 11l8-9m-8 9 8-2m8 2-8-9m8 9-8-2m0-7v7m-6.5 6 6.5 7 6.5-7-6.5 1.5z" })
    }
  )
);
IconCurrencyEthereumIcon.displayName = "IconCurrencyEthereumIcon";
var IconCurrencyEthereumIcon_default = IconCurrencyEthereumIcon;
export {
  IconCurrencyEthereumIcon_default as default
};
