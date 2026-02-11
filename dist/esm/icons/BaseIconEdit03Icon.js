import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconEdit03Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 4H6.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C2 6.29 2 7.13 2 8.8v8.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V13M8 16h1.67c.5 0 .74 0 .97-.06a2 2 0 0 0 .58-.23c.2-.13.37-.3.72-.65L21.5 5.5a2.12 2.12 0 0 0-3-3l-9.56 9.56a5 5 0 0 0-.65.72 2 2 0 0 0-.23.58c-.06.23-.06.48-.06.97z" })
    }
  )
);
BaseIconEdit03Icon.displayName = "BaseIconEdit03Icon";
var BaseIconEdit03Icon_default = BaseIconEdit03Icon;
export {
  BaseIconEdit03Icon_default as default
};
