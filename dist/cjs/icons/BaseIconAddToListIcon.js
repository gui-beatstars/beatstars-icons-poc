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
var BaseIconAddToListIcon_exports = {};
__export(BaseIconAddToListIcon_exports, {
  default: () => BaseIconAddToListIcon_default
});
module.exports = __toCommonJS(BaseIconAddToListIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconAddToListIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M20 6a1 1 0 1 0 0-2zM4 4a1 1 0 0 0 0 2zm16 12a1 1 0 1 0 0-2zm-6-2a1 1 0 1 0 0 2zm4-2a1 1 0 1 0-2 0zm-2 6a1 1 0 1 0 2 0zm-2-7a1 1 0 1 0 0-2zM4 9a1 1 0 0 0 0 2zm6 7a1 1 0 1 0 0-2zm-6-2a1 1 0 1 0 0 2zm16-9V4H4v2h16zm0 10v-1h-3v2h3zm-3 0v-1h-3v2h3zm0 0h1v-3h-2v3zm0 0h-1v3h2v-3zm-3-5V9H4v2h10zm-4 5v-1H4v2h6z" })
    }
  )
);
BaseIconAddToListIcon.displayName = "BaseIconAddToListIcon";
var BaseIconAddToListIcon_default = BaseIconAddToListIcon;
