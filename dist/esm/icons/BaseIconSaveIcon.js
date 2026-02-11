import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconSaveIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M7 3v3.4c0 .56 0 .84.1 1.05a1 1 0 0 0 .45.44C7.76 8 8.04 8 8.6 8h6.8c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.45c.11-.21.11-.49.11-1.05V4m0 17v-6.4c0-.56 0-.84-.1-1.05a1 1 0 0 0-.45-.44c-.21-.11-.49-.11-1.05-.11H8.6c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.45C7 13.76 7 14.04 7 14.6V21M21 9.33v6.87c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H7.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C3 18.71 3 17.87 3 16.2V7.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C5.29 3 6.13 3 7.8 3h6.87c.5 0 .74 0 .97.06q.3.07.58.23c.2.13.37.3.72.65l3.12 3.12c.35.35.52.52.65.72a2 2 0 0 1 .23.58 4 4 0 0 1 .06.97" })
    }
  )
);
BaseIconSaveIcon.displayName = "BaseIconSaveIcon";
var BaseIconSaveIcon_default = BaseIconSaveIcon;
export {
  BaseIconSaveIcon_default as default
};
