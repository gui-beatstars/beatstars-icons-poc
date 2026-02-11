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
var BaseIconVoloco01Icon_exports = {};
__export(BaseIconVoloco01Icon_exports, {
  default: () => BaseIconVoloco01Icon_default
});
module.exports = __toCommonJS(BaseIconVoloco01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconVoloco01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeWidth: "2", d: "M10.234 5.17 11.6 9.083l1.826-4.565a1 1 0 0 1 .62-.58l3.876-1.262a1 1 0 0 1 1.232 1.338l-6.647 15.827c-.341.812-1.489.819-1.84.011L4.607 5.898A1 1 0 0 1 5.525 4.5H9.29a1 1 0 0 1 .944.67Z" })
    }
  )
);
BaseIconVoloco01Icon.displayName = "BaseIconVoloco01Icon";
var BaseIconVoloco01Icon_default = BaseIconVoloco01Icon;
