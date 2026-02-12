import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconElipsisVerticalIcon = forwardRef(
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
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" })
      ]
    }
  )
);
IconElipsisVerticalIcon.displayName = "IconElipsisVerticalIcon";
var IconElipsisVerticalIcon_default = IconElipsisVerticalIcon;
export {
  IconElipsisVerticalIcon_default as default
};
