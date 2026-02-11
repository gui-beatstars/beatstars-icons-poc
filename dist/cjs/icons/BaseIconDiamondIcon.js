"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BaseIconDiamondIcon_exports = {};
__export(BaseIconDiamondIcon_exports, {
  default: () => BaseIconDiamondIcon_default
});
module.exports = __toCommonJS(BaseIconDiamondIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDiamondIcon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2.5 9h19M10 3 8 9l4 11.5L16 9l-2-6m-1.4 17.26 8.96-10.75c.15-.18.23-.27.26-.37a.5.5 0 0 0 0-.28c-.03-.1-.1-.19-.26-.37l-4.33-5.2q-.12-.15-.19-.2l-.15-.07q-.09-.03-.28-.02H7.37q-.18 0-.27.02l-.15.07-.19.2-4.33 5.2c-.16.18-.23.27-.26.37a.5.5 0 0 0 0 .28c.03.1.1.19.26.37l8.96 10.75c.2.26.31.38.44.43a.5.5 0 0 0 .34 0c.13-.05.23-.17.44-.43" })
    }
  )
);
BaseIconDiamondIcon.displayName = "BaseIconDiamondIcon";
var BaseIconDiamondIcon_default = BaseIconDiamondIcon;
