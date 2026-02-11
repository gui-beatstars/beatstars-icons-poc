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
var BaseIconBell01Icon_exports = {};
__export(BaseIconBell01Icon_exports, {
  default: () => BaseIconBell01Icon_default
});
module.exports = __toCommonJS(BaseIconBell01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconBell01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.35 21a4 4 0 0 0 5.3 0M18 8A6 6 0 1 0 6 8c0 3.09-.78 5.2-1.65 6.6-.73 1.19-1.1 1.78-1.09 1.94.02.18.05.25.2.36.13.1.73.1 1.93.1H18.6c1.2 0 1.8 0 1.93-.1.15-.1.18-.18.2-.36.01-.16-.36-.75-1.09-1.93A12.4 12.4 0 0 1 18 8" })
    }
  )
);
BaseIconBell01Icon.displayName = "BaseIconBell01Icon";
var BaseIconBell01Icon_default = BaseIconBell01Icon;
