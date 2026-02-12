import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconRotateLeftIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 9.2v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 21 6.08 21 7.2 21h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 19.48 20 18.92 20 17.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.48 6 17.92 6 16.8 6H11m0 0 3-3m-3 3 3 3" })
    }
  )
);
IconRotateLeftIcon.displayName = "IconRotateLeftIcon";
var IconRotateLeftIcon_default = IconRotateLeftIcon;
export {
  IconRotateLeftIcon_default as default
};
