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
var BaseIconSale01Icon_exports = {};
__export(BaseIconSale01Icon_exports, {
  default: () => BaseIconSale01Icon_default
});
module.exports = __toCommonJS(BaseIconSale01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconSale01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m16 8-8 8m1.2 4.6q.51-.05.92.25l1.2.92c.4.3.96.3 1.35 0l1.25-.96q.37-.28.82-.22l1.56.2c.5.07.98-.2 1.17-.67l.6-1.45q.18-.42.6-.6l1.45-.6c.47-.2.74-.67.68-1.17l-.2-1.5q-.05-.51.25-.92l.92-1.2c.3-.4.3-.96 0-1.35l-.96-1.25a1 1 0 0 1-.22-.82l.2-1.56a1.1 1.1 0 0 0-.67-1.17l-1.45-.6a1 1 0 0 1-.6-.6l-.6-1.46a1.1 1.1 0 0 0-1.17-.67l-1.56.2a1 1 0 0 1-.82-.21l-1.25-.96c-.4-.3-.95-.3-1.34 0l-1.25.96q-.37.27-.82.22L7.7 3.2a1.1 1.1 0 0 0-1.17.67l-.6 1.45q-.18.42-.6.6l-1.45.6c-.47.2-.74.67-.68 1.17l.2 1.56q.06.45-.21.82l-.96 1.25c-.3.4-.3.95 0 1.34l.96 1.25q.27.37.22.82l-.2 1.56c-.07.5.2.98.67 1.17l1.45.6q.42.18.6.6l.6 1.46c.2.46.67.74 1.17.67zM9.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m6 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" })
    }
  )
);
BaseIconSale01Icon.displayName = "BaseIconSale01Icon";
var BaseIconSale01Icon_default = BaseIconSale01Icon;
