import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconLoadingIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2.25v2.5M12 18v4M5.75 12h-3.5m19 0h-1.5m-1.3 6.46-.7-.71m.91-12.33-1.41 1.41M4.92 19.08l2.83-2.83M5.13 5.21l2.12 2.12" })
    }
  )
);
BaseIconLoadingIcon.displayName = "BaseIconLoadingIcon";
var BaseIconLoadingIcon_default = BaseIconLoadingIcon;
export {
  BaseIconLoadingIcon_default as default
};
