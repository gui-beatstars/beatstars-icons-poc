import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconKeysIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m11.559 10.355.323 1.206.941 3.512 1.294 4.83c.26.97-.394 1.988-1.46 2.274-1.068.286-2.143-.269-2.403-1.239m1.305-10.583-.736-2.746m.736 2.746q.436-.234.936-.37c2.134-.572 4.285.537 4.805 2.477.65 2.425-.986 4.97-3.653 5.685S8.297 17.5 7.64 15.05c-.148-.55-.912-3.401 3.182-7.44m0 0-.94-3.513c-.26-.97.394-1.988 1.46-2.274 1.067-.286 2.143.269 2.403 1.239.565 2.107-1.792 3.617-2.923 4.547" })
    }
  )
);
BaseIconKeysIcon.displayName = "BaseIconKeysIcon";
var BaseIconKeysIcon_default = BaseIconKeysIcon;
export {
  BaseIconKeysIcon_default as default
};
