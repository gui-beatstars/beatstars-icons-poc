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
var BaseIconGenreRockIcon_exports = {};
__export(BaseIconGenreRockIcon_exports, {
  default: () => BaseIconGenreRockIcon_default
});
module.exports = __toCommonJS(BaseIconGenreRockIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconGenreRockIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.48 11.5v-1a1.5 1.5 0 1 1 3 0m0 0V12m0-1.5a1.5 1.5 0 1 1 3 0V12 5.5a1.5 1.5 0 1 1 3 0V16a6 6 0 0 1-6 6h-2 .2a6 6 0 0 1-5.2-3q-.46-.72-3.29-5.73a1.5 1.5 0 0 1 .54-2.02 1.9 1.9 0 0 1 2.28.28L7.48 13V4.5a1.5 1.5 0 1 1 3 0V12" })
    }
  )
);
BaseIconGenreRockIcon.displayName = "BaseIconGenreRockIcon";
var BaseIconGenreRockIcon_default = BaseIconGenreRockIcon;
