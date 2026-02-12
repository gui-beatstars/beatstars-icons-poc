import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconElipsisHorizontalIcon = forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ jsxs(
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
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" })
      ]
    }
  )
);
IconElipsisHorizontalIcon.displayName = "IconElipsisHorizontalIcon";
var IconElipsisHorizontalIcon_default = IconElipsisHorizontalIcon;
export {
  IconElipsisHorizontalIcon_default as default
};
