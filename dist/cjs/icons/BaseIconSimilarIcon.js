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
var BaseIconSimilarIcon_exports = {};
__export(BaseIconSimilarIcon_exports, {
  default: () => BaseIconSimilarIcon_default
});
module.exports = __toCommonJS(BaseIconSimilarIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconSimilarIcon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      className,
      style,
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M20.3 21.7a1 1 0 0 0 1.4-1.4l-.7.7zm-2.94-5.76a1 1 0 0 0-1.42 1.42l.71-.71zM4.46 4.81A1 1 0 1 0 5.92 6.2l-.73-.69zM6.92 16.7a1 1 0 1 0-1.17 1.62l.59-.81zM7 10a1 1 0 0 0-2 0zm-2 3a1 1 0 1 0 2 0zM4 8a1 1 0 0 0-2 0zm-2 8a1 1 0 1 0 2 0zm11-6a1 1 0 1 0-2 0zm-2 3a1 1 0 1 0 2 0zm-1-6a1 1 0 0 0-2 0zm-2 8a1 1 0 1 0 2 0zm13 6 .7-.7-4.34-4.35-.7.7-.71.71 4.34 4.35zm-4.34-4.34.7-.71-.71.7-.7.7v.01zM19 11h-1c0 1.93-.78 3.68-2.05 4.95l.7.7.71.71A9 9 0 0 0 20 11zm-2.34 5.66-.71-.71A7 7 0 0 1 11 18v2c2.48 0 4.74-1 6.36-2.64zM11 3v1a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9zM5.19 5.5l.73.69A7 7 0 0 1 11 4V2a9 9 0 0 0-6.54 2.81zM11 19v-1a7 7 0 0 1-4.08-1.31l-.58.81-.59.81A9 9 0 0 0 11 20zm-5-9H5v3h2v-3zM3 8H2v8h2V8zm9 2h-1v3h2v-3zM9 7H8v8h2V7z" })
    }
  )
);
BaseIconSimilarIcon.displayName = "BaseIconSimilarIcon";
var BaseIconSimilarIcon_default = BaseIconSimilarIcon;
