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
var BaseIconMessageTextSquare02Icon_exports = {};
__export(BaseIconMessageTextSquare02Icon_exports, {
  default: () => BaseIconMessageTextSquare02Icon_default
});
module.exports = __toCommonJS(BaseIconMessageTextSquare02Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconMessageTextSquare02Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M7 8.5h5M7 12h8m-8 6v2.34c0 .53 0 .8.1.93q.16.19.4.19c.18 0 .38-.17.8-.5l2.39-1.9c.48-.4.73-.6 1-.73a3 3 0 0 1 .76-.27c.3-.06.61-.06 1.23-.06h2.52c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V7.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C18.71 3 17.87 3 16.2 3H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 5.29 3 6.13 3 7.8V14c0 .93 0 1.4.1 1.78a3 3 0 0 0 2.12 2.12c.39.1.85.1 1.78.1" })
    }
  )
);
BaseIconMessageTextSquare02Icon.displayName = "BaseIconMessageTextSquare02Icon";
var BaseIconMessageTextSquare02Icon_default = BaseIconMessageTextSquare02Icon;
