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
var BaseIconLightning01Icon_exports = {};
__export(BaseIconLightning01Icon_exports, {
  default: () => BaseIconLightning01Icon_default
});
module.exports = __toCommonJS(BaseIconLightning01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconLightning01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14.25 2H8.494c-.18 0-.27 0-.348.027a.5.5 0 0 0-.187.116c-.06.058-.1.139-.18.3l-4.2 8.4c-.192.383-.288.574-.265.73a.5.5 0 0 0 .208.337c.129.09.343.09.772.09H10.5l-3 10L19.693 9.355c.411-.426.617-.64.629-.822a.5.5 0 0 0-.177-.415C20.005 8 19.71 8 19.117 8h-7.118z" })
    }
  )
);
BaseIconLightning01Icon.displayName = "BaseIconLightning01Icon";
var BaseIconLightning01Icon_default = BaseIconLightning01Icon;
