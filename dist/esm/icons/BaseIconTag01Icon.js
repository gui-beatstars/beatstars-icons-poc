import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconTag01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2 5.2v4.47c0 .5 0 .74.06.97q.07.3.23.58c.13.2.3.37.65.72l7.67 7.67c1.18 1.18 1.78 1.78 2.46 2a3 3 0 0 0 1.86 0c.68-.22 1.28-.82 2.46-2l2.22-2.22c1.18-1.18 1.78-1.78 2-2.46a3 3 0 0 0 0-1.86c-.22-.68-.82-1.28-2-2.46l-7.67-7.67a4 4 0 0 0-.72-.65 2 2 0 0 0-.58-.23C10.4 2 10.16 2 9.67 2H5.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C2 3.52 2 4.08 2 5.2M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" })
    }
  )
);
BaseIconTag01Icon.displayName = "BaseIconTag01Icon";
var BaseIconTag01Icon_default = BaseIconTag01Icon;
export {
  BaseIconTag01Icon_default as default
};
