import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconMidiKeyboardIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 8h4m8 0h.01M2 12h20M6 12v4m4-4v4m4-4v4m4-4v4M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2" })
    }
  )
);
BaseIconMidiKeyboardIcon.displayName = "BaseIconMidiKeyboardIcon";
var BaseIconMidiKeyboardIcon_default = BaseIconMidiKeyboardIcon;
export {
  BaseIconMidiKeyboardIcon_default as default
};
