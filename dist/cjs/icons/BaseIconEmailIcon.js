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
var BaseIconEmailIcon_exports = {};
__export(BaseIconEmailIcon_exports, {
  default: () => BaseIconEmailIcon_default
});
module.exports = __toCommonJS(BaseIconEmailIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconEmailIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m13.74 2.63 7.53 4.9c.27.17.4.26.5.37a1 1 0 0 1 .19.35c.04.14.04.3.04.62v7.33c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H6.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C2 18.71 2 17.87 2 16.2V8.87c0-.32 0-.48.04-.62a1 1 0 0 1 .2-.35c.09-.11.22-.2.49-.37l7.53-4.9m3.48 0c-.63-.4-.94-.61-1.28-.7a2 2 0 0 0-.92 0c-.34.09-.65.3-1.28.7m3.48 0 6.2 4.03c.68.45 1.03.67 1.15.95a1 1 0 0 1 0 .78c-.12.28-.47.5-1.15.95l-6.2 4.03c-.63.4-.94.61-1.28.7a2 2 0 0 1-.92 0c-.34-.09-.65-.3-1.28-.7l-6.2-4.03c-.68-.45-1.03-.67-1.15-.95a1 1 0 0 1 0-.78c.12-.28.47-.5 1.15-.95l6.2-4.03M21.5 19l-6.64-6m-5.72 0L2.5 19" })
    }
  )
);
BaseIconEmailIcon.displayName = "BaseIconEmailIcon";
var BaseIconEmailIcon_default = BaseIconEmailIcon;
