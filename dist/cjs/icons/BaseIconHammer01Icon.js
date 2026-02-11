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
var BaseIconHammer01Icon_exports = {};
__export(BaseIconHammer01Icon_exports, {
  default: () => BaseIconHammer01Icon_default
});
module.exports = __toCommonJS(BaseIconHammer01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconHammer01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21H10.41M9.62 9.5l-5.92 5a1.99 1.99 0 1 0 2.75 2.85l5.24-5.76m3.42-4.3 2.2 1.76a1.84 1.84 0 0 1 .16 2.73l-1.68 1.69a1.8 1.8 0 0 1-2.7-.15l-1.78-2.2q-.63-.8-1.42-1.42L7.7 7.94a1.84 1.84 0 0 1-.16-2.72l1.68-1.69a1.8 1.8 0 0 1 2.7.15l1.78 2.2q.63.8 1.42 1.42" })
    }
  )
);
BaseIconHammer01Icon.displayName = "BaseIconHammer01Icon";
var BaseIconHammer01Icon_default = BaseIconHammer01Icon;
