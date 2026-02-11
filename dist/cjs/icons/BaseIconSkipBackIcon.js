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
var BaseIconSkipBackIcon_exports = {};
__export(BaseIconSkipBackIcon_exports, {
  default: () => BaseIconSkipBackIcon_default
});
module.exports = __toCommonJS(BaseIconSkipBackIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconSkipBackIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 4v16m12.68-1.16-7.45-5.4c-.68-.49-1.03-.74-1.15-1.03q-.15-.41 0-.82c.12-.3.47-.54 1.15-1.03l7.45-5.4C17.74 4.39 18.28 4 18.72 4c.4 0 .76.16 1 .43.28.32.28.94.28 2.17v10.8c0 1.23 0 1.85-.28 2.17-.24.27-.6.43-1 .43-.45 0-.98-.39-2.04-1.16" })
    }
  )
);
BaseIconSkipBackIcon.displayName = "BaseIconSkipBackIcon";
var BaseIconSkipBackIcon_default = BaseIconSkipBackIcon;
