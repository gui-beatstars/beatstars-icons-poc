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
var BaseIconLayersIcon_exports = {};
__export(BaseIconLayersIcon_exports, {
  default: () => BaseIconLayersIcon_default
});
module.exports = __toCommonJS(BaseIconLayersIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconLayersIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m2 12 9.64 4.82q.18.1.27.11h.18q.09-.01.27-.1L22 12M2 17l9.64 4.82q.18.1.27.11h.18q.09-.01.27-.1L22 17M2 7l9.64-4.82q.18-.1.27-.11h.18q.09.01.27.1L22 7l-9.64 4.82q-.18.1-.27.11h-.18q-.09-.01-.27-.1z" })
    }
  )
);
BaseIconLayersIcon.displayName = "BaseIconLayersIcon";
var BaseIconLayersIcon_default = BaseIconLayersIcon;
