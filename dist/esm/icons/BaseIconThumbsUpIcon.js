import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconThumbsUpIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M7 22V11m-5 2v7c0 1.1.9 2 2 2h13.43a3 3 0 0 0 2.96-2.54l1.08-7A3 3 0 0 0 18.5 9H15a1 1 0 0 1-1-1V4.47C14 3.1 12.9 2 11.53 2c-.32 0-.62.2-.75.49L7.26 10.4a1 1 0 0 1-.91.59H4a2 2 0 0 0-2 2" })
    }
  )
);
BaseIconThumbsUpIcon.displayName = "BaseIconThumbsUpIcon";
var BaseIconThumbsUpIcon_default = BaseIconThumbsUpIcon;
export {
  BaseIconThumbsUpIcon_default as default
};
