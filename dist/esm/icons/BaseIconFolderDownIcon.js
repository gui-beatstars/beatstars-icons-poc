import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconFolderDownIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m13 7-1.116-2.231c-.32-.642-.481-.963-.72-1.198a2 2 0 0 0-.748-.462C10.1 3 9.74 3 9.022 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2V7m11 0H2m11 0h4.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V7m10.91 6h-1.82c-.97 0-1.454 0-1.678.192a.8.8 0 0 0-.278.67c.023.295.366.638 1.051 1.323l.91.91c.317.317.475.475.658.535a.8.8 0 0 0 .494 0c.183-.06.341-.218.658-.535l.91-.91c.685-.685 1.028-1.028 1.051-1.322a.8.8 0 0 0-.278-.671C14.364 13 13.88 13 12.91 13" })
    }
  )
);
BaseIconFolderDownIcon.displayName = "BaseIconFolderDownIcon";
var BaseIconFolderDownIcon_default = BaseIconFolderDownIcon;
export {
  BaseIconFolderDownIcon_default as default
};
