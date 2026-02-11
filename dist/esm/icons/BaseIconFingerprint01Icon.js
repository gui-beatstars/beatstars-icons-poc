import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconFingerprint01Icon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m5.8 18.53.06-.09A14 14 0 0 0 8 11a4 4 0 1 1 8 0q0 1.53-.2 3m-2.12 6.84q.91-1.83 1.5-3.84M19 18.13q.98-3.4.99-7.13A8 8 0 0 0 8 4.07m-5 11.3c.64-1.32 1-2.8 1-4.37 0-1.46.39-2.82 1.07-4M12 11c0 3.52-1 6.8-2.75 9.57" })
    }
  )
);
BaseIconFingerprint01Icon.displayName = "BaseIconFingerprint01Icon";
var BaseIconFingerprint01Icon_default = BaseIconFingerprint01Icon;
export {
  BaseIconFingerprint01Icon_default as default
};
