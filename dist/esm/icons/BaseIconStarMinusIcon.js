import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconStarMinusIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12h6M8.494 8.32l-4.891.716c-.515.075-.773.113-.892.238a.5.5 0 0 0-.132.41c.022.172.209.353.582.716l3.538 3.446c.11.108.165.162.2.226a.5.5 0 0 1 .06.183c.009.072-.004.148-.03.3l-.835 4.867c-.088.514-.132.77-.05.922a.5.5 0 0 0 .349.253c.17.032.4-.09.862-.332l4.373-2.3c.136-.07.204-.107.276-.12a.5.5 0 0 1 .192 0c.072.013.14.05.276.12l4.373 2.3c.461.243.692.364.862.332a.5.5 0 0 0 .348-.253c.083-.152.039-.409-.049-.922l-.835-4.867c-.026-.152-.039-.228-.03-.3a.5.5 0 0 1 .06-.184c.035-.063.09-.117.2-.225L20.84 10.4c.372-.363.559-.544.582-.716a.5.5 0 0 0-.133-.41c-.12-.125-.377-.163-.892-.238l-4.891-.715a1.1 1.1 0 0 1-.295-.064.5.5 0 0 1-.155-.113c-.05-.054-.084-.123-.152-.26l-2.187-4.43c-.23-.468-.345-.701-.502-.776a.5.5 0 0 0-.43 0c-.157.075-.272.308-.502.775l-2.187 4.43c-.068.138-.102.207-.152.26a.5.5 0 0 1-.155.114c-.067.03-.143.042-.295.064" })
    }
  )
);
BaseIconStarMinusIcon.displayName = "BaseIconStarMinusIcon";
var BaseIconStarMinusIcon_default = BaseIconStarMinusIcon;
export {
  BaseIconStarMinusIcon_default as default
};
