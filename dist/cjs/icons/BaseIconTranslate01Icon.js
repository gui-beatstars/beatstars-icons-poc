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
var BaseIconTranslate01Icon_exports = {};
__export(BaseIconTranslate01Icon_exports, {
  default: () => BaseIconTranslate01Icon_default
});
module.exports = __toCommonJS(BaseIconTranslate01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconTranslate01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12.91 17h7.18m-7.18 0L11 21m1.91-4 2.87-6c.23-.47.34-.72.5-.8a.5.5 0 0 1 .44 0c.16.08.27.33.5.8l2.87 6m0 0L22 21M2 5h6m0 0h3.5M8 5V3m3.5 2H14m-2.5 0a18 18 0 0 1-3.33 7.88M10 14a9 9 0 0 1-1.83-1.12m0 0A10 10 0 0 1 5 9m3.17 3.88A17 17 0 0 1 2 18" })
    }
  )
);
BaseIconTranslate01Icon.displayName = "BaseIconTranslate01Icon";
var BaseIconTranslate01Icon_default = BaseIconTranslate01Icon;
