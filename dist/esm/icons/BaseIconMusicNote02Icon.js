import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconMusicNote02Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 5.778 12.857 4v12.444m-1.004-2.514c1.339 1.389 1.339 3.64 0 5.029a3.343 3.343 0 0 1-4.849 0c-1.339-1.389-1.339-3.64 0-5.029a3.343 3.343 0 0 1 4.849 0" })
    }
  )
);
BaseIconMusicNote02Icon.displayName = "BaseIconMusicNote02Icon";
var BaseIconMusicNote02Icon_default = BaseIconMusicNote02Icon;
export {
  BaseIconMusicNote02Icon_default as default
};
