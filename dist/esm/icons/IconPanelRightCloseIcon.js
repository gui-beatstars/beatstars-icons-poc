import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconPanelRightCloseIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 3v18M8 9l3 3-3 3M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" })
    }
  )
);
IconPanelRightCloseIcon.displayName = "IconPanelRightCloseIcon";
var IconPanelRightCloseIcon_default = IconPanelRightCloseIcon;
export {
  IconPanelRightCloseIcon_default as default
};
