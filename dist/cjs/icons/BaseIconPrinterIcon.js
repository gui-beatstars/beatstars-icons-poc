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
var BaseIconPrinterIcon_exports = {};
__export(BaseIconPrinterIcon_exports, {
  default: () => BaseIconPrinterIcon_default
});
module.exports = __toCommonJS(BaseIconPrinterIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconPrinterIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 7V5.2c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88C16.48 2 15.92 2 14.8 2H9.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C6 3.52 6 4.08 6 5.2V7m0 11c-.93 0-1.4 0-1.78-.1a3 3 0 0 1-2.12-2.12C2 15.4 2 14.93 2 14v-2.2c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C4.29 7 5.13 7 6.8 7h10.4c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17V14c0 .93 0 1.4-.1 1.78a3 3 0 0 1-2.12 2.12c-.39.1-.85.1-1.78.1m-3-7.5h3M9.2 22h5.6c1.12 0 1.68 0 2.1-.22a2 2 0 0 0 .88-.87c.22-.43.22-.99.22-2.11v-1.6c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88c-.43-.22-.99-.22-2.11-.22H9.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C6 15.52 6 16.08 6 17.2v1.6c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22" })
    }
  )
);
BaseIconPrinterIcon.displayName = "BaseIconPrinterIcon";
var BaseIconPrinterIcon_default = BaseIconPrinterIcon;
