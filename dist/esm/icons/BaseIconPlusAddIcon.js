import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconPlusAddIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 4v16m-8-8h16" })
    }
  )
);
BaseIconPlusAddIcon.displayName = "BaseIconPlusAddIcon";
var BaseIconPlusAddIcon_default = BaseIconPlusAddIcon;
export {
  BaseIconPlusAddIcon_default as default
};
