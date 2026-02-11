import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconPlayerPauseIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.52 3h4.12c.21 0 .29.02.37.06q.1.06.18.17c.04.07.06.15.06.35v16.84c0 .2-.02.28-.06.35a.4.4 0 0 1-.18.17c-.08.04-.16.06-.37.06H5.6c-.21 0-.29-.02-.37-.06a.4.4 0 0 1-.18-.17l-.06-.26V3.58c0-.2.02-.28.06-.35q.07-.1.18-.17A1 1 0 0 1 5.52 3m8.75 0h4.12c.21 0 .29.02.37.06q.1.06.18.17c.04.07.06.15.06.35v16.84c0 .2-.02.28-.06.35a.4.4 0 0 1-.18.17c-.08.04-.16.06-.37.06h-4.03c-.21 0-.29-.02-.37-.06a.4.4 0 0 1-.18-.17l-.06-.26V3.58c0-.2.02-.28.06-.35q.07-.1.18-.17a1 1 0 0 1 .28-.06", clipRule: "evenodd" })
    }
  )
);
BaseIconPlayerPauseIcon.displayName = "BaseIconPlayerPauseIcon";
var BaseIconPlayerPauseIcon_default = BaseIconPlayerPauseIcon;
export {
  BaseIconPlayerPauseIcon_default as default
};
