import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCollaboratorsIcon = forwardRef(
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
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 22.5v-12l.397.199a17 17 0 0 0 15.206 0L20 10.5v12h-5v-7l-1.52.253c-.98.164-1.98.164-2.96 0L9 15.5v7z" })
      ]
    }
  )
);
IconCollaboratorsIcon.displayName = "IconCollaboratorsIcon";
var IconCollaboratorsIcon_default = IconCollaboratorsIcon;
export {
  IconCollaboratorsIcon_default as default
};
