import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGiftCardIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22 12.5H2m9 5H6m6-10H7.5a2.5 2.5 0 1 1 0-5c3.5 0 4.5 5 4.5 5m0 0h4.5a2.5 2.5 0 0 0 0-5c-3.5 0-4.5 5-4.5 5M2 10.7v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 19.98 22 19.42 22 18.3v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 7.5 19.92 7.5 18.8 7.5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 9.02 2 9.58 2 10.7" })
    }
  )
);
BaseIconGiftCardIcon.displayName = "BaseIconGiftCardIcon";
var BaseIconGiftCardIcon_default = BaseIconGiftCardIcon;
export {
  BaseIconGiftCardIcon_default as default
};
