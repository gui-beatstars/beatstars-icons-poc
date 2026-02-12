import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconLemonIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.745 6.042c2.924-2.9 7.05-3.688 10.051-2.168.198-.263.454-.48.746-.631a2.14 2.14 0 0 1 .938-.242 2 2 0 0 1 1.204.362c.346.245.601.597.727 1.004.127.407.118.85-.024 1.264-.143.415-.411.78-.768 1.044 1.532 2.978.738 7.071-2.185 9.971 1.32-1.88.262-5.395-2.494-8.13-2.952-2.928-6.78-3.877-8.55-2.12-1.772 1.757-.815 5.555 2.137 8.483q.474.47.973.87M12 16l1.83 1.965c.327.338.546.758.63 1.212.085.453.032.92-.152 1.345s-.492.79-.887 1.053a2.58 2.58 0 0 1-2.704.085 2.44 2.44 0 0 1-.957-.994 2.32 2.32 0 0 1 .302-2.582z" })
    }
  )
);
IconLemonIcon.displayName = "IconLemonIcon";
var IconLemonIcon_default = IconLemonIcon;
export {
  IconLemonIcon_default as default
};
