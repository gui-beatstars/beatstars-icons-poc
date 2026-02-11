import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconDiskCollectionIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.82 2.5h12.36m-3.63 8.47a3.76 3.76 0 0 1 0 5.23 3.55 3.55 0 0 1-5.1 0 3.76 3.76 0 0 1 0-5.23 3.55 3.55 0 0 1 5.1 0m4.39-5.3H5.06A2.1 2.1 0 0 0 3 7.92l.76 11.6a2.1 2.1 0 0 0 2.06 1.98h12.36c1.09 0 1.99-.86 2.06-1.97L21 7.92a2.1 2.1 0 0 0-2.06-2.25" })
    }
  )
);
BaseIconDiskCollectionIcon.displayName = "BaseIconDiskCollectionIcon";
var BaseIconDiskCollectionIcon_default = BaseIconDiskCollectionIcon;
export {
  BaseIconDiskCollectionIcon_default as default
};
