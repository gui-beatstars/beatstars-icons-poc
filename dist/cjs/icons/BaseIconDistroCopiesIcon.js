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
var BaseIconDistroCopiesIcon_exports = {};
__export(BaseIconDistroCopiesIcon_exports, {
  default: () => BaseIconDistroCopiesIcon_default
});
module.exports = __toCommonJS(BaseIconDistroCopiesIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDistroCopiesIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m12 4-4.85 7.714a.8.8 0 0 0-.112.212.3.3 0 0 0 0 .148.8.8 0 0 0 .112.212L12 20M6.97 4l-4.85 7.714a.8.8 0 0 0-.111.212.3.3 0 0 0 0 .148.8.8 0 0 0 .112.212L6.97 20M17.03 4l4.85 7.714a.8.8 0 0 1 .111.212.3.3 0 0 1 0 .148.8.8 0 0 1-.112.212L17.03 20l-4.85-7.714c-.065-.105-.098-.157-.111-.212a.3.3 0 0 1 0-.148c.013-.055.046-.107.112-.212z" })
    }
  )
);
BaseIconDistroCopiesIcon.displayName = "BaseIconDistroCopiesIcon";
var BaseIconDistroCopiesIcon_default = BaseIconDistroCopiesIcon;
