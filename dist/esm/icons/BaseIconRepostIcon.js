import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconRepostIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m17 2 4 4m0 0-4 4m4-4H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 8.29 3 9.13 3 10.8v.2m0 7h13.2c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V13M3 18l4 4m-4-4 4-4" })
    }
  )
);
BaseIconRepostIcon.displayName = "BaseIconRepostIcon";
var BaseIconRepostIcon_default = BaseIconRepostIcon;
export {
  BaseIconRepostIcon_default as default
};
