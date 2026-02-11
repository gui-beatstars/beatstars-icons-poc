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
var BaseIconDotList01Icon_exports = {};
__export(BaseIconDotList01Icon_exports, {
  default: () => BaseIconDotList01Icon_default
});
module.exports = __toCommonJS(BaseIconDotList01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDotList01Icon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      className,
      style,
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M9 5a1 1 0 0 0 0 2zm12 2a1 1 0 1 0 0-2zM9 11a1 1 0 1 0 0 2zm12 2a1 1 0 1 0 0-2zM9 17a1 1 0 1 0 0 2zm12 2a1 1 0 1 0 0-2zM4 5a1 1 0 0 0 0 2zm.02 2a1 1 0 1 0 0-2zM4 11a1 1 0 1 0 0 2zm.02 2a1 1 0 1 0 0-2zM4 17a1 1 0 1 0 0 2zm.02 2a1 1 0 1 0 0-2zM9 6v1h12V5H9zm0 6v1h12v-2H9zm0 6v1h12v-2H9zM4 6v1h.02V5H4zm1 0H4v2a2 2 0 0 0 2-2zM4 7V6H2a2 2 0 0 0 2 2zM3 6h1V4a2 2 0 0 0-2 2zm1-1v1h2a2 2 0 0 0-2-2zm0 7v1h.02v-2H4zm1 0H4v2a2 2 0 0 0 2-2zm-1 1v-1H2a2 2 0 0 0 2 2zm-1-1h1v-2a2 2 0 0 0-2 2zm1-1v1h2a2 2 0 0 0-2-2zm0 7v1h.02v-2H4zm1 0H4v2a2 2 0 0 0 2-2zm-1 1v-1H2a2 2 0 0 0 2 2zm-1-1h1v-2a2 2 0 0 0-2 2zm1-1v1h2a2 2 0 0 0-2-2z" })
    }
  )
);
BaseIconDotList01Icon.displayName = "BaseIconDotList01Icon";
var BaseIconDotList01Icon_default = BaseIconDotList01Icon;
