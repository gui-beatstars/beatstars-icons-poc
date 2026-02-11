import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconGlobePointerIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m2.687 14.645 1.908-1.101a.5.5 0 0 1 .342-.059l3.754.703a.5.5 0 0 0 .592-.494l-.014-3.29a.5.5 0 0 1 .068-.254l1.895-3.244a.5.5 0 0 0-.023-.54l-3.19-4.54M19 3.859C13.5 6.5 16.5 10 17.5 10.5c1.877.938 4.488 1 4.488 1Q22 11.251 22 11c0-5.523-4.477-10-10-10S2 5.477 2 11s4.477 10 10 10q.251 0 .5-.012m4.258-.048-3.168-8.35 8.349 3.167-3.702 1.48z" })
    }
  )
);
BaseIconGlobePointerIcon.displayName = "BaseIconGlobePointerIcon";
var BaseIconGlobePointerIcon_default = BaseIconGlobePointerIcon;
export {
  BaseIconGlobePointerIcon_default as default
};
