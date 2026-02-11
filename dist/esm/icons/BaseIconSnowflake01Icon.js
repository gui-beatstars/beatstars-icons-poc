import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconSnowflake01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m18.06 8.5-12.12 7m12.12-7 1.1-4.1m-1.1 4.1 4.1 1.1M5.94 15.5l-4.1-1.1m4.1 1.1-1.1 4.1m13.22-4.1-12.12-7m12.12 7 4.1-1.1m-4.1 1.1 1.1 4.1M5.94 8.5l-1.1-4.1m1.1 4.1-4.1 1.1M12 5v14m0-14L9 2m3 3 3-3m-3 17-3 3m3-3 3 3" })
    }
  )
);
BaseIconSnowflake01Icon.displayName = "BaseIconSnowflake01Icon";
var BaseIconSnowflake01Icon_default = BaseIconSnowflake01Icon;
export {
  BaseIconSnowflake01Icon_default as default
};
