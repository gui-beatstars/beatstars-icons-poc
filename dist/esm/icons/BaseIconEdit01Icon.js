import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconEdit01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 20h9M3 20h1.67c.5 0 .74 0 .97-.06a2 2 0 0 0 .58-.23c.2-.13.37-.3.72-.65L19.5 6.5a2.12 2.12 0 0 0-3-3L3.94 16.06a5 5 0 0 0-.65.72 2 2 0 0 0-.23.58c-.06.23-.06.48-.06.97z" })
    }
  )
);
BaseIconEdit01Icon.displayName = "BaseIconEdit01Icon";
var BaseIconEdit01Icon_default = BaseIconEdit01Icon;
export {
  BaseIconEdit01Icon_default as default
};
