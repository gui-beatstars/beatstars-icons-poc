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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3.22 10q.25-1.1.78-2.13m3.76-3.81A9 9 0 0 1 10 3.22m4 0q1.14.27 2.2.81m3.77 3.8q.56 1.04.8 2.17M3.23 14q.25 1.1.78 2.13m3.76 3.81q1.08.57 2.24.84m4 0q1.14-.27 2.2-.81m3.77-3.8q.56-1.04.8-2.17M7.28 3.73a2.5 2.5 0 1 1-3.54 3.54 2.5 2.5 0 0 1 3.54-3.54m13 0a2.5 2.5 0 1 1-3.54 3.54 2.5 2.5 0 0 1 3.54-3.54m-13 16.54a2.5 2.5 0 1 0-3.54-3.54 2.5 2.5 0 0 0 3.54 3.54m13 0a2.5 2.5 0 1 0-3.54-3.54 2.5 2.5 0 0 0 3.54 3.54" })
    }
  )
);
BaseIconCollaborationIcon.displayName = "BaseIconCollaborationIcon";
var BaseIconCollaborationIcon_default = BaseIconCollaborationIcon;
