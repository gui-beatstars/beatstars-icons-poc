import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconDropboxLogoIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6.1 10.07 12 6.21m-5.9 3.86L1.5 6.86 7.4 3 12 6.21m-5.9 3.86 5.9 3.86m-5.9-3.86L1.5 13.3l5.9 3.85 4.6-3.21m0-7.72 5.9 3.86M12 6.21 16.6 3l5.9 3.86-4.6 3.21M12 13.93l5.9-3.86M12 13.93l4.6 3.21 5.9-3.85-4.6-3.22m-.65 7.07v1.41L12 21l-5.25-2.45v-1.4" })
    }
  )
);
BaseIconDropboxLogoIcon.displayName = "BaseIconDropboxLogoIcon";
var BaseIconDropboxLogoIcon_default = BaseIconDropboxLogoIcon;
export {
  BaseIconDropboxLogoIcon_default as default
};
