import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconVideoStreamIcon = forwardRef(
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
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21.58 7.2a2.5 2.5 0 0 0-1.76-1.82C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.82q-.44 2.38-.42 4.8-.02 2.45.42 4.85a2.5 2.5 0 0 0 1.76 1.75c1.57.41 7.82.41 7.82.41s6.25 0 7.82-.41a2.5 2.5 0 0 0 1.76-1.82q.43-2.37.42-4.77.02-2.45-.42-4.85" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.75 9.47c0-.48 0-.72.1-.85a.5.5 0 0 1 .36-.2c.17-.01.37.11.77.37l3.95 2.54c.34.22.52.33.58.48a.5.5 0 0 1 0 .38c-.06.15-.24.26-.58.48l-3.95 2.54c-.4.26-.6.38-.77.37a.5.5 0 0 1-.36-.2c-.1-.13-.1-.37-.1-.85z" })
      ]
    }
  )
);
BaseIconVideoStreamIcon.displayName = "BaseIconVideoStreamIcon";
var BaseIconVideoStreamIcon_default = BaseIconVideoStreamIcon;
export {
  BaseIconVideoStreamIcon_default as default
};
