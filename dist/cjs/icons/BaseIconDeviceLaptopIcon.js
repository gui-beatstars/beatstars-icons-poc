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
var BaseIconDeviceLaptopIcon_exports = {};
__export(BaseIconDeviceLaptopIcon_exports, {
  default: () => BaseIconDeviceLaptopIcon_default
});
module.exports = __toCommonJS(BaseIconDeviceLaptopIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDeviceLaptopIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 16V7.2c0-1.12 0-1.68.22-2.1a2 2 0 0 1 .87-.88C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.1.22q.58.3.88.87c.22.43.22.99.22 2.11V16h-5.34c-.24 0-.36 0-.48.03a1 1 0 0 0-.29.12c-.1.06-.19.15-.36.32l-.06.06c-.17.17-.26.26-.36.32a1 1 0 0 1-.3.12c-.1.03-.23.03-.47.03h-2.68c-.24 0-.36 0-.48-.03a1 1 0 0 1-.29-.12c-.1-.06-.19-.15-.36-.32l-.06-.06a2 2 0 0 0-.36-.32 1 1 0 0 0-.3-.12q-.13-.04-.47-.03zm0 0a1 1 0 0 0-1 1v.33c0 .62 0 .93.07 1.19a2 2 0 0 0 1.41 1.41c.26.07.57.07 1.19.07h14.66c.62 0 .93 0 1.19-.07a2 2 0 0 0 1.41-1.41c.07-.26.07-.57.07-1.19 0-.3 0-.46-.03-.59a1 1 0 0 0-.71-.7c-.13-.04-.28-.04-.6-.04H20" })
    }
  )
);
BaseIconDeviceLaptopIcon.displayName = "BaseIconDeviceLaptopIcon";
var BaseIconDeviceLaptopIcon_default = BaseIconDeviceLaptopIcon;
