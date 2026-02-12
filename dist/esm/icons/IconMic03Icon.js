import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconMic03Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.002 12.9A5 5 0 1 0 11.1 9m3.902 3.9L11.1 9.001l-7.513 8.584a2 2 0 0 0 2.827 2.83z" })
    }
  )
);
IconMic03Icon.displayName = "IconMic03Icon";
var IconMic03Icon_default = IconMic03Icon;
export {
  IconMic03Icon_default as default
};
