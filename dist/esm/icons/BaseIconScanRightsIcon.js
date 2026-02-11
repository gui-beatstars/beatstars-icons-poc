import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconScanRightsIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 11v3M9 6v12m9-6v1M6 10v5m9-8v10M6 3H3v3m15-3h3v3M6 21H3v-3m15 3h3v-3" })
    }
  )
);
BaseIconScanRightsIcon.displayName = "BaseIconScanRightsIcon";
var BaseIconScanRightsIcon_default = BaseIconScanRightsIcon;
export {
  BaseIconScanRightsIcon_default as default
};
