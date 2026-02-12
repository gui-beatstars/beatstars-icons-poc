import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconMusicNote01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8.5 18V5l12-2v13m-12 2a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-12-7 12-2" })
    }
  )
);
IconMusicNote01Icon.displayName = "IconMusicNote01Icon";
var IconMusicNote01Icon_default = IconMusicNote01Icon;
export {
  IconMusicNote01Icon_default as default
};
