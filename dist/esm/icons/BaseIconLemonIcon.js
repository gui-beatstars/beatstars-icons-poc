import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconLemonIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.75 6.04c2.92-2.9 7.05-3.69 10.05-2.17A2.2 2.2 0 0 1 17.48 3a2 2 0 0 1 1.2.36q.53.39.73 1 .2.64-.02 1.27-.23.64-.77 1.04c1.53 2.98.74 7.08-2.19 9.98 1.32-1.88.27-5.4-2.49-8.13-2.95-2.93-6.78-3.88-8.55-2.12s-.81 5.55 2.14 8.48q.47.46.97.87M12 16l1.83 1.97q.5.51.63 1.2.13.7-.15 1.35-.3.66-.89 1.05a2.57 2.57 0 0 1-3.66-.9 2.3 2.3 0 0 1 .3-2.59z" })
    }
  )
);
BaseIconLemonIcon.displayName = "BaseIconLemonIcon";
var BaseIconLemonIcon_default = BaseIconLemonIcon;
export {
  BaseIconLemonIcon_default as default
};
