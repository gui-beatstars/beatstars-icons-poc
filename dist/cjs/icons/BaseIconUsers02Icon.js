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
var BaseIconUsers02Icon_exports = {};
__export(BaseIconUsers02Icon_exports, {
  default: () => BaseIconUsers02Icon_default
});
module.exports = __toCommonJS(BaseIconUsers02Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconUsers02Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M23 19v-1.1a2.5 2.5 0 0 0-2.5-2.5h-.8M1 19v-1.1a2.5 2.5 0 0 1 2.5-2.5h.8M17.34 19v-1.6a3.5 3.5 0 0 0-3.5-3.5h-3.68a3.5 3.5 0 0 0-3.5 3.5V19m14.13-9.48a2.02 2.02 0 1 1-2.86 2.86 2.02 2.02 0 0 1 2.86-2.86m-6.59-3.6a3.11 3.11 0 1 1-4.4 4.4 3.11 3.11 0 0 1 4.4-4.4m-8.13 3.6a2.02 2.02 0 1 1-2.86 2.86 2.02 2.02 0 0 1 2.86-2.86" })
    }
  )
);
BaseIconUsers02Icon.displayName = "BaseIconUsers02Icon";
var BaseIconUsers02Icon_default = BaseIconUsers02Icon;
