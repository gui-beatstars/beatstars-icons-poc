import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCurrencyPoundIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.5 20.5h-11s3.5-2.759 3.5-7c0-2.828-2.086-3.839-2.116-6.195.002-4.664 5.617-4.416 7.568-2.562M6.5 13.5H15" })
    }
  )
);
IconCurrencyPoundIcon.displayName = "IconCurrencyPoundIcon";
var IconCurrencyPoundIcon_default = IconCurrencyPoundIcon;
export {
  IconCurrencyPoundIcon_default as default
};
