import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGraphsLineIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 20v-7m-8 7V10M4 20v-4m9.4-10.97 5.18 1.94M10.8 5.4 5.2 9.6m15.86-3.16a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12m-16 3a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12m8-6a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12" })
    }
  )
);
BaseIconGraphsLineIcon.displayName = "BaseIconGraphsLineIcon";
var BaseIconGraphsLineIcon_default = BaseIconGraphsLineIcon;
export {
  BaseIconGraphsLineIcon_default as default
};
