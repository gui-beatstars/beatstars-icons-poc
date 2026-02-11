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
var BaseIconStarIcon_exports = {};
__export(BaseIconStarIcon_exports, {
  default: () => BaseIconStarIcon_default
});
module.exports = __toCommonJS(BaseIconStarIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconStarIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11.28 3.45c.23-.46.35-.7.5-.77a.5.5 0 0 1 .44 0c.15.07.27.3.5.77l2.18 4.43q.09.2.16.26.07.07.15.12c.07.03.14.04.3.06l4.89.72c.51.07.77.1.89.23q.15.18.13.41c-.02.18-.2.36-.58.72l-3.54 3.45q-.15.14-.2.22l-.06.18c0 .08 0 .15.03.3l.84 4.87c.08.52.13.77.05.92a.5.5 0 0 1-.35.26c-.17.03-.4-.1-.86-.33l-4.38-2.3q-.18-.11-.27-.13h-.2q-.09.02-.27.13l-4.38 2.3c-.46.24-.69.36-.86.33a.5.5 0 0 1-.35-.26c-.08-.15-.03-.4.05-.92l.84-4.87c.02-.15.04-.22.03-.3l-.06-.18a1 1 0 0 0-.2-.22L3.16 10.4c-.37-.36-.56-.54-.58-.72a.5.5 0 0 1 .13-.4c.12-.13.38-.17.9-.24l4.88-.72c.16-.02.23-.03.3-.06l.15-.12q.06-.06.16-.26z" })
    }
  )
);
BaseIconStarIcon.displayName = "BaseIconStarIcon";
var BaseIconStarIcon_default = BaseIconStarIcon;
