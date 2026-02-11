import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconMessageReplyIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m10 15-3.08 3.11c-.42.44-.64.66-.82.67a.5.5 0 0 1-.42-.17c-.12-.14-.12-.45-.12-1.06V16c0-.55-.45-.94-1-1.02a3 3 0 0 1-2.53-2.54c-.03-.22-.03-.48-.03-1V6.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C4.29 2 5.13 2 6.8 2h7.4c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17V11m0 11-2.18-1.51c-.3-.22-.46-.32-.62-.4a2 2 0 0 0-.46-.14c-.18-.04-.37-.04-.74-.04h-1.8c-1.12 0-1.68 0-2.1-.21a2 2 0 0 1-.88-.88c-.22-.43-.22-.99-.22-2.1V14.2c0-1.12 0-1.68.22-2.1a2 2 0 0 1 .87-.88c.43-.22.99-.22 2.11-.22h5.6c1.12 0 1.68 0 2.1.22q.58.3.88.87c.22.43.22.99.22 2.11v2.71c0 .94 0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15z" })
    }
  )
);
BaseIconMessageReplyIcon.displayName = "BaseIconMessageReplyIcon";
var BaseIconMessageReplyIcon_default = BaseIconMessageReplyIcon;
export {
  BaseIconMessageReplyIcon_default as default
};
