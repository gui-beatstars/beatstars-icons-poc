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
var BaseIconCurrencyPoundIcon_exports = {};
__export(BaseIconCurrencyPoundIcon_exports, {
  default: () => BaseIconCurrencyPoundIcon_default
});
module.exports = __toCommonJS(BaseIconCurrencyPoundIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconCurrencyPoundIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.5 20.5h-11s3.5-2.76 3.5-7c0-2.83-2.09-3.84-2.12-6.2 0-4.66 5.62-4.41 7.57-2.56M6.5 13.5H15" })
    }
  )
);
BaseIconCurrencyPoundIcon.displayName = "BaseIconCurrencyPoundIcon";
var BaseIconCurrencyPoundIcon_default = BaseIconCurrencyPoundIcon;
