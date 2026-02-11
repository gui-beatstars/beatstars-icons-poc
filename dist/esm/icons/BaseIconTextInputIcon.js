import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconTextInputIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 7H5.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C2 8.52 2 9.08 2 10.2v3.6c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22H13m4-10h1.8c1.12 0 1.68 0 2.1.22q.58.3.88.87c.22.43.22.99.22 2.11v3.6c0 1.12 0 1.68-.22 2.1a2 2 0 0 1-.87.88c-.43.22-.99.22-2.11.22H17m0 4V3m2.5 0h-5m5 18h-5" })
    }
  )
);
BaseIconTextInputIcon.displayName = "BaseIconTextInputIcon";
var BaseIconTextInputIcon_default = BaseIconTextInputIcon;
export {
  BaseIconTextInputIcon_default as default
};
