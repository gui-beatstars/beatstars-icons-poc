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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 11v3M9 6v12m9-6v1M6 10v5m9-8v10M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" })
    }
  )
);
BaseIconScanRightsIcon.displayName = "BaseIconScanRightsIcon";
var BaseIconScanRightsIcon_default = BaseIconScanRightsIcon;
export {
  BaseIconScanRightsIcon_default as default
};
