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
var BaseIconSend01Icon_exports = {};
__export(BaseIconSend01Icon_exports, {
  default: () => BaseIconSend01Icon_default
});
module.exports = __toCommonJS(BaseIconSend01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconSend01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.5 12H5m-.08.3-2.34 6.97c-.18.54-.27.82-.2.99a.5.5 0 0 0 .32.3c.18.05.44-.07.97-.31l16.7-7.52c.52-.23.78-.35.86-.5a.5.5 0 0 0 0-.45c-.08-.16-.34-.28-.85-.5L3.66 3.74c-.52-.24-.79-.36-.96-.3a.5.5 0 0 0-.33.3c-.07.16.02.43.2.98l2.35 7.06.05.18v.13q0 .06-.05.2" })
    }
  )
);
BaseIconSend01Icon.displayName = "BaseIconSend01Icon";
var BaseIconSend01Icon_default = BaseIconSend01Icon;
