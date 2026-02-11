import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconMessageReplyIcon = forwardRef(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m10 15-3.075 3.114c-.43.434-.644.651-.828.666a.5.5 0 0 1-.421-.172c-.12-.14-.12-.446-.12-1.056v-1.56c0-.548-.449-.944-.99-1.024a3 3 0 0 1-2.534-2.533C2 12.219 2 11.96 2 11.445V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.31-1.311C4.28 2 5.12 2 6.8 2h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.31 1.311C19 4.28 19 5.12 19 6.8V11m0 11-2.177-1.513c-.306-.213-.458-.32-.625-.395a2 2 0 0 0-.463-.145c-.18-.033-.366-.033-.738-.033H13.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C10 18.395 10 17.834 10 16.714V14.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C11.52 11 12.08 11 13.2 11h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 12.52 22 13.08 22 14.2v2.714c0 .932 0 1.398-.152 1.766a2 2 0 0 1-1.083 1.082c-.367.152-.833.152-1.765.152z" })
    }
  )
);
BaseIconMessageReplyIcon.displayName = "BaseIconMessageReplyIcon";
var BaseIconMessageReplyIcon_default = BaseIconMessageReplyIcon;
export {
  BaseIconMessageReplyIcon_default as default
};
