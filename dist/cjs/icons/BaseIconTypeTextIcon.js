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
var BaseIconTypeTextIcon_exports = {};
__export(BaseIconTypeTextIcon_exports, {
  default: () => BaseIconTypeTextIcon_default
});
module.exports = __toCommonJS(BaseIconTypeTextIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconTypeTextIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 7c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C5.6 4 6.07 4 7 4h6c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08C16 5.6 16 6.07 16 7M7 20h6M10 4v16M20 4v16" })
    }
  )
);
BaseIconTypeTextIcon.displayName = "BaseIconTypeTextIcon";
var BaseIconTypeTextIcon_default = BaseIconTypeTextIcon;
