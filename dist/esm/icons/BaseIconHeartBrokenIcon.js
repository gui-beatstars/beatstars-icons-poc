import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconHeartBrokenIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m11.19 13.56 2-4H10.5c-.43 0-.64 0-.77-.1a.5.5 0 0 1-.21-.33c-.02-.15.07-.35.26-.73l2.2-3.4m4.13-2C19.63 3 22 6.35 22 9.48 22 15.81 12.18 21 12 21S2 15.81 2 9.48C2 6.35 4.37 3 7.89 3A5.3 5.3 0 0 1 12 4.92 5.3 5.3 0 0 1 16.11 3" })
    }
  )
);
BaseIconHeartBrokenIcon.displayName = "BaseIconHeartBrokenIcon";
var BaseIconHeartBrokenIcon_default = BaseIconHeartBrokenIcon;
export {
  BaseIconHeartBrokenIcon_default as default
};
