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
var BaseIconEyeNotVisible01Icon_exports = {};
__export(BaseIconEyeNotVisible01Icon_exports, {
  default: () => BaseIconEyeNotVisible01Icon_default
});
module.exports = __toCommonJS(BaseIconEyeNotVisible01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconEyeNotVisible01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.74 5.1Q11.34 5 12 5c5.1 0 8.46 4.5 9.58 6.29.14.21.2.32.24.49.03.12.03.32 0 .44-.04.17-.1.28-.24.5-.3.47-.76 1.14-1.36 1.86M6.72 6.72a16 16 0 0 0-4.3 4.57c-.14.21-.2.32-.24.49-.03.12-.03.32 0 .44.04.17.1.28.24.5C3.55 14.5 6.9 19 12 19c2.06 0 3.83-.73 5.29-1.72M3 3l18 18M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" })
    }
  )
);
BaseIconEyeNotVisible01Icon.displayName = "BaseIconEyeNotVisible01Icon";
var BaseIconEyeNotVisible01Icon_default = BaseIconEyeNotVisible01Icon;
