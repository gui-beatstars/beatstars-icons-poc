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
var BaseIconMarerPinIcon_exports = {};
__export(BaseIconMarerPinIcon_exports, {
  default: () => BaseIconMarerPinIcon_default
});
module.exports = __toCommonJS(BaseIconMarerPinIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconMarerPinIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 14.29c-1.85.81-3 1.95-3 3.21C2 19.99 6.48 22 12 22s10-2.01 10-4.5c0-1.26-1.15-2.4-3-3.21M18 8c0 4.06-4.5 6-6 9-1.5-3-6-4.94-6-9a6 6 0 1 1 12 0m-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
    }
  )
);
BaseIconMarerPinIcon.displayName = "BaseIconMarerPinIcon";
var BaseIconMarerPinIcon_default = BaseIconMarerPinIcon;
