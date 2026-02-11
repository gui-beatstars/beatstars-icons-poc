import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconDeleteTrash01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 6v-.8c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H9.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C5 19.71 5 18.87 5 17.2V6" })
    }
  )
);
BaseIconDeleteTrash01Icon.displayName = "BaseIconDeleteTrash01Icon";
var BaseIconDeleteTrash01Icon_default = BaseIconDeleteTrash01Icon;
export {
  BaseIconDeleteTrash01Icon_default as default
};
