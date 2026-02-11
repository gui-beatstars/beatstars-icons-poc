import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconMessageSquareIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 7.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C5.29 3 6.13 3 7.8 3h8.4c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v5.4c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33h-2.52c-.62 0-.93 0-1.23.06a3 3 0 0 0-.76.27 6 6 0 0 0-1 .72L8.3 20.96c-.42.33-.62.5-.8.5a.5.5 0 0 1-.4-.19c-.1-.14-.1-.4-.1-.93V18c-.93 0-1.4 0-1.78-.1a3 3 0 0 1-2.12-2.12C3 15.4 3 14.93 3 14z" })
    }
  )
);
BaseIconMessageSquareIcon.displayName = "BaseIconMessageSquareIcon";
var BaseIconMessageSquareIcon_default = BaseIconMessageSquareIcon;
export {
  BaseIconMessageSquareIcon_default as default
};
