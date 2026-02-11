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
var BaseIconImage01Icon_exports = {};
__export(BaseIconImage01Icon_exports, {
  default: () => BaseIconImage01Icon_default
});
module.exports = __toCommonJS(BaseIconImage01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconImage01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m4.27 20.73 6.6-6.6c.4-.4.6-.6.82-.67a1 1 0 0 1 .62 0c.23.08.43.28.82.67l6.55 6.55M14 15l2.87-2.87c.4-.4.6-.6.82-.67a1 1 0 0 1 .62 0c.23.08.43.28.82.67L22 15M10 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6.8 21h10.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V7.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C19.71 3 18.87 3 17.2 3H6.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C2 5.29 2 6.13 2 7.8v8.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33" })
    }
  )
);
BaseIconImage01Icon.displayName = "BaseIconImage01Icon";
var BaseIconImage01Icon_default = BaseIconImage01Icon;
