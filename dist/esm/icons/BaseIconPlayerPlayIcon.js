import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconPlayerPlayIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 5.09c0-.96 0-1.44.2-1.7A1 1 0 0 1 6.93 3c.33-.02.73.25 1.52.78l10.37 6.9c.66.45.99.67 1.1.94q.15.38 0 .76c-.11.27-.44.5-1.1.93L8.45 20.22c-.8.53-1.2.8-1.52.78a1 1 0 0 1-.73-.39c-.2-.26-.2-.74-.2-1.7z" })
    }
  )
);
BaseIconPlayerPlayIcon.displayName = "BaseIconPlayerPlayIcon";
var BaseIconPlayerPlayIcon_default = BaseIconPlayerPlayIcon;
export {
  BaseIconPlayerPlayIcon_default as default
};
