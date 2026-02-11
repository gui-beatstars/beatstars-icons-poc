import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconWalletIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 8V4.5c0-.83 0-1.25-.18-1.5a1 1 0 0 0-.65-.42c-.3-.06-.69.12-1.44.47l-8.87 4.1a5 5 0 0 0-1.26.7 2 2 0 0 0-.48.76C3 8.93 3 9.31 3 10.05V15m13.5-.5h.01M3 11.2v6.6c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22h11.6c1.12 0 1.68 0 2.1-.22a2 2 0 0 0 .88-.87c.22-.43.22-.99.22-2.11v-6.6c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88C19.48 8 18.92 8 17.8 8H6.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C3 9.52 3 10.08 3 11.2m14 3.3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" })
    }
  )
);
BaseIconWalletIcon.displayName = "BaseIconWalletIcon";
var BaseIconWalletIcon_default = BaseIconWalletIcon;
export {
  BaseIconWalletIcon_default as default
};
