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
var BaseIconCart01Icon_exports = {};
__export(BaseIconCart01Icon_exports, {
  default: () => BaseIconCart01Icon_default
});
module.exports = __toCommonJS(BaseIconCart01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconCart01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2 2h1.3q.35-.01.47.05.15.06.22.18c.06.1.07.21.1.46L4.58 6m0 0 1.05 7.73c.14.98.2 1.47.44 1.84q.31.5.85.75c.4.18.9.18 1.88.18h8.56c.94 0 1.42 0 1.8-.17a2 2 0 0 0 .84-.7c.24-.34.33-.8.5-1.73l1.33-6.95c.06-.33.1-.49.05-.62a.5.5 0 0 0-.22-.26c-.13-.07-.3-.07-.63-.07zM10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
    }
  )
);
BaseIconCart01Icon.displayName = "BaseIconCart01Icon";
var BaseIconCart01Icon_default = BaseIconCart01Icon;
