import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconFigmaIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2H8.5a3.5 3.5 0 1 0 0 7M12 2v7m0-7h3.5a3.5 3.5 0 1 1 0 7M12 9H8.5M12 9h3.5M12 9v7M8.5 9a3.5 3.5 0 0 0 0 7m7-7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-7 7a3.5 3.5 0 1 0 3.5 3.5V16m-3.5 0H12" })
    }
  )
);
IconFigmaIcon.displayName = "IconFigmaIcon";
var IconFigmaIcon_default = IconFigmaIcon;
export {
  IconFigmaIcon_default as default
};
