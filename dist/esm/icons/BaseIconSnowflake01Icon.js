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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m18.062 8.5-12.124 7m12.124-7 1.098-4.098M18.062 8.5l4.098 1.098M5.938 15.5 1.84 14.402M5.938 15.5 4.84 19.598M18.062 15.5l-12.124-7m12.124 7 4.098-1.098M18.062 15.5l1.098 4.098M5.938 8.5 4.84 4.402M5.938 8.5 1.84 9.598M12 5v14m0-14L9 2m3 3 3-3m-3 17-3 3m3-3 3 3" })
    }
  )
);
BaseIconSnowflake01Icon.displayName = "BaseIconSnowflake01Icon";
var BaseIconSnowflake01Icon_default = BaseIconSnowflake01Icon;
export {
  BaseIconSnowflake01Icon_default as default
};
