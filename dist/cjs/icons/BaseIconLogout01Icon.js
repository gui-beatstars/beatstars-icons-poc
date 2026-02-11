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
var BaseIconLogout01Icon_exports = {};
__export(BaseIconLogout01Icon_exports, {
  default: () => BaseIconLogout01Icon_default
});
module.exports = __toCommonJS(BaseIconLogout01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconLogout01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m16 17 5-5m0 0-5-5m5 5H9m3 5c0 .93 0 1.4-.1 1.78a3 3 0 0 1-2.12 2.12c-.39.1-.85.1-1.78.1h-.5c-1.4 0-2.1 0-2.65-.23a3 3 0 0 1-1.62-1.62C3 18.6 3 17.9 3 16.5v-9c0-1.4 0-2.1.23-2.65a3 3 0 0 1 1.62-1.62C5.4 3 6.1 3 7.5 3H8c.93 0 1.4 0 1.78.1a3 3 0 0 1 2.12 2.12c.1.39.1.85.1 1.78" })
    }
  )
);
BaseIconLogout01Icon.displayName = "BaseIconLogout01Icon";
var BaseIconLogout01Icon_default = BaseIconLogout01Icon;
