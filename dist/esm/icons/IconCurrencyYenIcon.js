import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCurrencyYenIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 20.5v-9m0 0 6.5-8m-6.5 8-6.5-8m12.5 8H6m11 4H7" })
    }
  )
);
IconCurrencyYenIcon.displayName = "IconCurrencyYenIcon";
var IconCurrencyYenIcon_default = IconCurrencyYenIcon;
export {
  IconCurrencyYenIcon_default as default
};
