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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m13.744 2.634 7.528 4.893c.266.173.399.26.495.374a1 1 0 0 1 .189.348c.044.143.044.302.044.62V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V8.868c0-.317 0-.476.044-.62a1 1 0 0 1 .189-.347c.096-.115.229-.201.495-.374l7.528-4.893m3.488 0c-.631-.41-.947-.616-1.287-.696a2 2 0 0 0-.914 0c-.34.08-.656.285-1.287.696m3.488 0 6.192 4.024c.688.448 1.032.671 1.151.955a1 1 0 0 1 0 .774c-.12.284-.463.507-1.15.955l-6.193 4.024c-.631.41-.947.616-1.287.696-.3.07-.613.07-.914 0-.34-.08-.656-.285-1.287-.696L4.064 9.342c-.688-.448-1.032-.671-1.151-.955a1 1 0 0 1 0-.774c.12-.284.463-.507 1.15-.955l6.193-4.024M21.5 19l-6.643-6m-5.714 0L2.5 19" })
    }
  )
);
BaseIconEmailIcon.displayName = "BaseIconEmailIcon";
var BaseIconEmailIcon_default = BaseIconEmailIcon;
