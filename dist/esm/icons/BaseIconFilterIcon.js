import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconFilterIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.06 6.403C3.362 5.64 3.014 5.26 3 4.937a.9.9 0 0 1 .335-.73C3.59 4 4.113 4 5.159 4H18.84c1.046 0 1.569 0 1.824.206.222.18.346.45.334.73-.013.324-.361.705-1.059 1.467l-5.26 5.746c-.139.152-.208.228-.258.314a1 1 0 0 0-.096.245c-.021.097-.021.199-.021.402v4.818c0 .176 0 .264-.03.34a.45.45 0 0 1-.121.177c-.062.054-.146.087-.313.152l-3.134 1.226c-.339.132-.508.198-.644.17a.46.46 0 0 1-.29-.191c-.078-.113-.078-.292-.078-.648V13.11c0-.203 0-.305-.022-.402a1 1 0 0 0-.095-.245c-.05-.086-.12-.162-.258-.314z" })
    }
  )
);
BaseIconFilterIcon.displayName = "BaseIconFilterIcon";
var BaseIconFilterIcon_default = BaseIconFilterIcon;
export {
  BaseIconFilterIcon_default as default
};
