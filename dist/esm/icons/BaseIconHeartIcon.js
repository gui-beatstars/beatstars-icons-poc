import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconHeartIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16.111 3C19.633 3 22 6.353 22 9.48 22 15.814 12.178 21 12 21S2 15.814 2 9.48C2 6.352 4.367 3 7.889 3 9.91 3 11.233 4.024 12 4.924 12.767 4.024 14.089 3 16.111 3" })
    }
  )
);
BaseIconHeartIcon.displayName = "BaseIconHeartIcon";
var BaseIconHeartIcon_default = BaseIconHeartIcon;
export {
  BaseIconHeartIcon_default as default
};
