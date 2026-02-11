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
var BaseIconDevicePhoneIcon_exports = {};
__export(BaseIconDevicePhoneIcon_exports, {
  default: () => BaseIconDevicePhoneIcon_default
});
module.exports = __toCommonJS(BaseIconDevicePhoneIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDevicePhoneIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 2v1.4c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11h-2.8c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45C9 4.24 9 3.96 9 3.4V2m-.8 20h7.6c1.12 0 1.68 0 2.1-.22a2 2 0 0 0 .88-.87c.22-.43.22-.99.22-2.11V5.2c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22" })
    }
  )
);
BaseIconDevicePhoneIcon.displayName = "BaseIconDevicePhoneIcon";
var BaseIconDevicePhoneIcon_default = BaseIconDevicePhoneIcon;
