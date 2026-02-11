import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconExclusiveTagIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.67 14.65V9.42c0-.22 0-.32.04-.41l.16-.2q.09-.06.4-.1l3.9-.66c.29-.05.43-.07.54-.03q.15.05.23.2c.06.1.06.25.06.54v5m-5.33.9c0 .74-.6 1.34-1.34 1.34C7.6 16 7 15.4 7 14.65c0-.74.6-1.35 1.33-1.35s1.34.6 1.34 1.35m5.33-.9c0 .74-.6 1.34-1.33 1.34s-1.34-.6-1.34-1.35a1.34 1.34 0 1 1 2.67 0M7.33 3.81c.8-.07 1.57-.38 2.18-.9a3.8 3.8 0 0 1 4.98 0c.6.52 1.37.83 2.18.9a3.8 3.8 0 0 1 3.51 3.51c.07.8.38 1.57.9 2.18a3.8 3.8 0 0 1 0 4.98 4 4 0 0 0-.9 2.18 3.8 3.8 0 0 1-3.51 3.51c-.8.07-1.57.38-2.18.9a3.8 3.8 0 0 1-4.98 0 4 4 0 0 0-2.18-.9 3.8 3.8 0 0 1-3.51-3.51 4 4 0 0 0-.9-2.18 3.8 3.8 0 0 1 0-4.98c.52-.6.83-1.37.9-2.18a3.8 3.8 0 0 1 3.51-3.51" })
    }
  )
);
BaseIconExclusiveTagIcon.displayName = "BaseIconExclusiveTagIcon";
var BaseIconExclusiveTagIcon_default = BaseIconExclusiveTagIcon;
export {
  BaseIconExclusiveTagIcon_default as default
};
