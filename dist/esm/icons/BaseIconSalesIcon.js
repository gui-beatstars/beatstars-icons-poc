import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconSalesIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m17 9-5.43 5.43c-.2.2-.3.3-.42.34a.5.5 0 0 1-.3 0c-.12-.04-.22-.14-.42-.34l-1.86-1.86c-.2-.2-.3-.3-.42-.34a.5.5 0 0 0-.3 0c-.12.04-.22.14-.42.34L3 17m14-8h-4m4 0v4m-9.2 8h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V7.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C18.71 3 17.87 3 16.2 3H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 5.29 3 6.13 3 7.8v8.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33" })
    }
  )
);
BaseIconSalesIcon.displayName = "BaseIconSalesIcon";
var BaseIconSalesIcon_default = BaseIconSalesIcon;
export {
  BaseIconSalesIcon_default as default
};
