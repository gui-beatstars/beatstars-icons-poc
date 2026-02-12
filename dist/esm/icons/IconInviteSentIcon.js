import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconInviteSentIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 10.5v-7m0 0L8.5 7M12 3.5 15.5 7M2 12h3.882c.685 0 1.312.387 1.618 1s.933 1 1.618 1h5.764c.685 0 1.312-.387 1.618-1s.933-1 1.618-1H22M2 12V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4M2 12v3.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V12m0 0V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4" })
    }
  )
);
IconInviteSentIcon.displayName = "IconInviteSentIcon";
var IconInviteSentIcon_default = IconInviteSentIcon;
export {
  IconInviteSentIcon_default as default
};
