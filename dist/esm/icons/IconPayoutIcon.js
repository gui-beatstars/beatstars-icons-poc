import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconPayoutIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 15h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17m4 4 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2.002 2.002 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6M18.9 9a2.9 2.9 0 1 1-5.8 0 2.9 2.9 0 0 1 5.8 0M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" })
    }
  )
);
IconPayoutIcon.displayName = "IconPayoutIcon";
var IconPayoutIcon_default = IconPayoutIcon;
export {
  IconPayoutIcon_default as default
};
