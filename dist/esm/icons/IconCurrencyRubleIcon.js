import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCurrencyRubleIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8.5 11.5h6a4 4 0 0 0 0-8h-6zm0 0h-2m7 4h-7M8.5 4v16.5" })
    }
  )
);
IconCurrencyRubleIcon.displayName = "IconCurrencyRubleIcon";
var IconCurrencyRubleIcon_default = IconCurrencyRubleIcon;
export {
  IconCurrencyRubleIcon_default as default
};
