import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconSend02Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.602 13.398 20.43 3.57m-9.708 10.134 2.46 6.325c.216.557.324.836.48.917a.47.47 0 0 0 .432 0c.157-.08.265-.36.483-.916l6.168-15.806c.196-.503.294-.754.24-.915a.47.47 0 0 0-.295-.295c-.16-.054-.412.044-.915.24L3.97 9.423c-.557.218-.835.326-.916.483a.47.47 0 0 0 0 .431c.081.157.36.265.917.482l6.325 2.46c.113.043.17.065.217.1q.065.045.11.109c.034.047.056.104.1.217" })
    }
  )
);
BaseIconSend02Icon.displayName = "BaseIconSend02Icon";
var BaseIconSend02Icon_default = BaseIconSend02Icon;
export {
  BaseIconSend02Icon_default as default
};
