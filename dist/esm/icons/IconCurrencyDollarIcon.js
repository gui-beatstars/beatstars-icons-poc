import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCurrencyDollarIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 16a4 4 0 0 0 4 4h4a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h4a4 4 0 0 1 4 4m-6-6v20" })
    }
  )
);
IconCurrencyDollarIcon.displayName = "IconCurrencyDollarIcon";
var IconCurrencyDollarIcon_default = IconCurrencyDollarIcon;
export {
  IconCurrencyDollarIcon_default as default
};
