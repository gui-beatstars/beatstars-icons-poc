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
var BaseIconCollaborationIcon_exports = {};
__export(BaseIconCollaborationIcon_exports, {
  default: () => BaseIconCollaborationIcon_default
});
module.exports = __toCommonJS(BaseIconCollaborationIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconCollaborationIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3.224 10A9 9 0 0 1 4 7.872m3.76-3.814A9 9 0 0 1 10 3.224m3.999 0a9 9 0 0 1 2.193.81m3.781 3.788c.365.695.632 1.428.802 2.178M3.224 14A9 9 0 0 0 4 16.128m3.761 3.814c.713.38 1.467.659 2.24.834m3.999 0a9 9 0 0 0 2.193-.81m3.781-3.788A9 9 0 0 0 20.776 14M7.268 3.732a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536m13 0a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536m-13 16.536a2.5 2.5 0 1 0-3.536-3.536 2.5 2.5 0 0 0 3.536 3.536m13 0a2.5 2.5 0 1 0-3.536-3.536 2.5 2.5 0 0 0 3.536 3.536" })
    }
  )
);
BaseIconCollaborationIcon.displayName = "BaseIconCollaborationIcon";
var BaseIconCollaborationIcon_default = BaseIconCollaborationIcon;
