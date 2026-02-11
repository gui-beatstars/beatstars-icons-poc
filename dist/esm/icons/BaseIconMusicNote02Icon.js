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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 5.78 12.86 4v12.44m-1-2.51a3.65 3.65 0 0 1 0 5.03 3.34 3.34 0 0 1-4.86 0 3.65 3.65 0 0 1 0-5.03 3.34 3.34 0 0 1 4.85 0" })
    }
  )
);
BaseIconMusicNote02Icon.displayName = "BaseIconMusicNote02Icon";
var BaseIconMusicNote02Icon_default = BaseIconMusicNote02Icon;
export {
  BaseIconMusicNote02Icon_default as default
};
