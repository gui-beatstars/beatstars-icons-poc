import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconStarMinusIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12h6M8.5 8.32l-4.9.72c-.51.07-.77.1-.89.23a.5.5 0 0 0-.13.41c.02.18.2.36.58.72l3.54 3.45q.15.14.2.22l.06.18c0 .08 0 .15-.03.3l-.84 4.87c-.08.52-.13.77-.05.92q.12.21.35.26c.17.03.4-.1.86-.33l4.38-2.3q.18-.11.27-.13h.2q.09.02.27.13l4.38 2.3c.46.24.69.36.86.33a.5.5 0 0 0 .35-.26c.08-.15.03-.4-.05-.92l-.84-4.87a1 1 0 0 1-.03-.3l.06-.18q.05-.08.2-.22l3.54-3.45c.37-.36.56-.54.58-.72a.5.5 0 0 0-.13-.4c-.12-.13-.38-.17-.9-.24l-4.88-.72a1 1 0 0 1-.3-.06l-.15-.12q-.07-.06-.16-.26l-2.18-4.43c-.23-.46-.35-.7-.5-.77a.5.5 0 0 0-.44 0c-.15.07-.27.3-.5.77L9.1 7.88q-.09.2-.16.26l-.15.12a1 1 0 0 1-.3.06" })
    }
  )
);
BaseIconStarMinusIcon.displayName = "BaseIconStarMinusIcon";
var BaseIconStarMinusIcon_default = BaseIconStarMinusIcon;
export {
  BaseIconStarMinusIcon_default as default
};
