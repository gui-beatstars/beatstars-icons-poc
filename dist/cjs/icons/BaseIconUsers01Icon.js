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
var BaseIconUsers01Icon_exports = {};
__export(BaseIconUsers01Icon_exports, {
  default: () => BaseIconUsers01Icon_default
});
module.exports = __toCommonJS(BaseIconUsers01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconUsers01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22 21v-2a4 4 0 0 0-3-3.87M15.5 3.29a4 4 0 0 1 0 7.42M17 21c0-1.86 0-2.8-.3-3.53a4 4 0 0 0-2.17-2.17C13.8 15 12.86 15 11 15H8c-1.86 0-2.8 0-3.53.3a4 4 0 0 0-2.17 2.17C2 18.2 2 19.14 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" })
    }
  )
);
BaseIconUsers01Icon.displayName = "BaseIconUsers01Icon";
var BaseIconUsers01Icon_default = BaseIconUsers01Icon;
