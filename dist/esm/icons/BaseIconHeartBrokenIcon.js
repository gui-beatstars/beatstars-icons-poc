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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m11.189 13.558 2-4H10.5c-.429 0-.643 0-.772-.09a.5.5 0 0 1-.208-.337c-.023-.156.073-.348.264-.731l2.2-3.4m4.127-2C19.633 3 22 6.353 22 9.48 22 15.814 12.178 21 12 21S2 15.814 2 9.48C2 6.352 4.367 3 7.889 3 9.91 3 11.233 4.024 12 4.924 12.767 4.024 14.089 3 16.111 3" })
    }
  )
);
BaseIconHeartBrokenIcon.displayName = "BaseIconHeartBrokenIcon";
var BaseIconHeartBrokenIcon_default = BaseIconHeartBrokenIcon;
export {
  BaseIconHeartBrokenIcon_default as default
};
