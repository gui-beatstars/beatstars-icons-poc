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
var BaseIconEyeVisible01Icon_exports = {};
__export(BaseIconEyeVisible01Icon_exports, {
  default: () => BaseIconEyeVisible01Icon_default
});
module.exports = __toCommonJS(BaseIconEyeVisible01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconEyeVisible01Icon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2.42 12.71c-.14-.21-.2-.32-.24-.49a1 1 0 0 1 0-.44c.04-.17.1-.28.24-.5C3.55 9.5 6.9 5 12 5s8.46 4.5 9.58 6.29c.14.21.2.32.24.49.03.12.03.32 0 .44-.04.17-.1.28-.24.5C20.46 14.5 17.11 19 12 19c-5.1 0-8.45-4.5-9.58-6.29" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" })
      ]
    }
  )
);
BaseIconEyeVisible01Icon.displayName = "BaseIconEyeVisible01Icon";
var BaseIconEyeVisible01Icon_default = BaseIconEyeVisible01Icon;
