import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGoogleDriveIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22.5 15.46 15.05 3H8.27M22.5 15.46h-6.1L8.27 3M22.5 15.46H7.6L4.2 21m18.29-5.54L19.11 21H4.21M8.27 3 1.5 15.46 4.21 21M8.27 3l3.6 5.51L4.21 21" })
    }
  )
);
BaseIconGoogleDriveIcon.displayName = "BaseIconGoogleDriveIcon";
var BaseIconGoogleDriveIcon_default = BaseIconGoogleDriveIcon;
export {
  BaseIconGoogleDriveIcon_default as default
};
