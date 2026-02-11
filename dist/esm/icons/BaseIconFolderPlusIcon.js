import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconFolderPlusIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m13 7-1.12-2.23c-.32-.64-.48-.96-.72-1.2a2 2 0 0 0-.74-.46C10.1 3 9.74 3 9.02 3H5.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C2 4.52 2 5.08 2 6.2V7m0 0h15.2c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v4.4c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H6.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C2 18.71 2 17.87 2 16.2zm10 10v-6m-3 3h6" })
    }
  )
);
BaseIconFolderPlusIcon.displayName = "BaseIconFolderPlusIcon";
var BaseIconFolderPlusIcon_default = BaseIconFolderPlusIcon;
export {
  BaseIconFolderPlusIcon_default as default
};
