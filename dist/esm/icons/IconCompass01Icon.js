import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconCompass01Icon = forwardRef(
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
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" }),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14.722 8.266c.489-.163.733-.244.895-.186a.5.5 0 0 1 .303.303c.058.162-.023.406-.186.895l-1.488 4.463a2 2 0 0 1-.07.18c-.009.022-.013.033-.027.056a1 1 0 0 1-.075.1.5.5 0 0 1-.067.06c-.058.04-.127.063-.266.11l-4.463 1.487c-.489.163-.733.244-.895.186a.5.5 0 0 1-.303-.303c-.058-.162.023-.406.186-.895l1.488-4.462c.046-.14.07-.21.109-.267a.5.5 0 0 1 .13-.13c.058-.04.127-.063.266-.11z" })
      ]
    }
  )
);
IconCompass01Icon.displayName = "IconCompass01Icon";
var IconCompass01Icon_default = IconCompass01Icon;
export {
  IconCompass01Icon_default as default
};
