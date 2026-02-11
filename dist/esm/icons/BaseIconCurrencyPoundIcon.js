import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconCurrencyPoundIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.5 20.5h-11s3.5-2.76 3.5-7c0-2.83-2.09-3.84-2.12-6.2 0-4.66 5.62-4.41 7.57-2.56M6.5 13.5H15" })
    }
  )
);
BaseIconCurrencyPoundIcon.displayName = "BaseIconCurrencyPoundIcon";
var BaseIconCurrencyPoundIcon_default = BaseIconCurrencyPoundIcon;
export {
  BaseIconCurrencyPoundIcon_default as default
};
