import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconSoundKitIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 10v4m4.5-3v2M12 6v12m4.5-15v18M21 10v4" })
    }
  )
);
IconSoundKitIcon.displayName = "IconSoundKitIcon";
var IconSoundKitIcon_default = IconSoundKitIcon;
export {
  IconSoundKitIcon_default as default
};
