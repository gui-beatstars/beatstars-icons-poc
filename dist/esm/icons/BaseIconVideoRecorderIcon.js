import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconVideoRecorderIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22 8.93c0-.6 0-.9-.12-1.05a.5.5 0 0 0-.42-.17c-.18.01-.4.23-.83.66L17 12l3.63 3.63c.43.43.65.65.83.66a.5.5 0 0 0 .42-.17c.12-.14.12-.45.12-1.05zM2 9.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C4.29 5 5.13 5 6.8 5h5.4c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v4.4c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H6.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C2 16.71 2 15.87 2 14.2z" })
    }
  )
);
BaseIconVideoRecorderIcon.displayName = "BaseIconVideoRecorderIcon";
var BaseIconVideoRecorderIcon_default = BaseIconVideoRecorderIcon;
export {
  BaseIconVideoRecorderIcon_default as default
};
