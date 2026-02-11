import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconDevicePhoneIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 2v1.4c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11h-2.8c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45C9 4.24 9 3.96 9 3.4V2m-.8 20h7.6c1.12 0 1.68 0 2.1-.22a2 2 0 0 0 .88-.87c.22-.43.22-.99.22-2.11V5.2c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22" })
    }
  )
);
BaseIconDevicePhoneIcon.displayName = "BaseIconDevicePhoneIcon";
var BaseIconDevicePhoneIcon_default = BaseIconDevicePhoneIcon;
export {
  BaseIconDevicePhoneIcon_default as default
};
