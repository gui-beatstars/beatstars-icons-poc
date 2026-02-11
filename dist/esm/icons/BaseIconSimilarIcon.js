import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconSimilarIcon = forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      className,
      style,
      ...rest,
      children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M20.293 21.707a1 1 0 0 0 1.414-1.414L21 21zm-2.936-5.764a1 1 0 0 0-1.414 1.414l.707-.707zM4.464 4.813a1 1 0 1 0 1.453 1.375L5.19 5.5zM6.92 16.687a1 1 0 1 0-1.167 1.624l.583-.812zM7 10a1 1 0 0 0-2 0zm-2 3a1 1 0 1 0 2 0zM4 8a1 1 0 0 0-2 0zm-2 8a1 1 0 1 0 2 0zm11-6a1 1 0 1 0-2 0zm-2 3a1 1 0 1 0 2 0zm-1-6a1 1 0 0 0-2 0zm-2 8a1 1 0 1 0 2 0zm13 6 .707-.707-4.343-4.343-.707.707-.707.707 4.343 4.343zm-4.343-4.343.707-.707-.007-.007-.707.707-.707.707.007.007zM19 11h-1a6.98 6.98 0 0 1-2.05 4.95l.707.707.707.707A8.98 8.98 0 0 0 20 11zm-2.343 5.657-.707-.707A6.98 6.98 0 0 1 11 18v2a8.98 8.98 0 0 0 6.364-2.636zM11 3v1a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9zM5.19 5.5l.727.688A6.98 6.98 0 0 1 11 4V2a8.98 8.98 0 0 0-6.536 2.812zM11 19v-1a6.96 6.96 0 0 1-4.081-1.312l-.584.812-.583.812A8.96 8.96 0 0 0 11 20zm-5-9H5v3h2v-3zM3 8H2v8h2V8zm9 2h-1v3h2v-3zM9 7H8v8h2V7z" })
    }
  )
);
BaseIconSimilarIcon.displayName = "BaseIconSimilarIcon";
var BaseIconSimilarIcon_default = BaseIconSimilarIcon;
export {
  BaseIconSimilarIcon_default as default
};
