import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconStore01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.5 12v8m15-8v8M2 20.5h20m-8-.5v-3.33c0-.92-.9-1.67-2-1.67s-2 .75-2 1.67V20m-5.7-8c-1.7-.01-2.8-1.96-2.07-3.64l1.72-3.9A2.3 2.3 0 0 1 6.06 3h11.88c.9 0 1.72.57 2.11 1.46l1.72 3.9C22.5 10.04 21.4 12 19.7 12a2.53 2.53 0 0 1-2.57-2.5v-.06a2.56 2.56 0 0 1-5.13 0 2.56 2.56 0 0 1-5.13 0v.06c0 1.38-1.15 2.5-2.57 2.5" })
    }
  )
);
BaseIconStore01Icon.displayName = "BaseIconStore01Icon";
var BaseIconStore01Icon_default = BaseIconStore01Icon;
export {
  BaseIconStore01Icon_default as default
};
