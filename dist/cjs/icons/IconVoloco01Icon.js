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
var IconVoloco01Icon_exports = {};
__export(IconVoloco01Icon_exports, {
  default: () => IconVoloco01Icon_default
});
module.exports = __toCommonJS(IconVoloco01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconVoloco01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m10.375 5.573 1.225 3.51 1.722-4.304h0c.102-.256.153-.384.232-.49a1 1 0 0 1 .255-.238c.11-.072.241-.114.503-.2l2.364-.769c1.057-.344 1.585-.516 1.918-.387a1 1 0 0 1 .597.649c.101.342-.114.854-.545 1.88l-5.595 13.322c-.457 1.088-.686 1.632-1.01 1.798a1 1 0 0 1-.901.006c-.327-.163-.562-.704-1.032-1.786L4.972 6.737c-.325-.746-.487-1.12-.43-1.42a1 1 0 0 1 .423-.646c.253-.171.66-.171 1.474-.171h2.425c.409 0 .613 0 .788.068a1 1 0 0 1 .399.283c.121.143.189.336.323.722" })
    }
  )
);
IconVoloco01Icon.displayName = "IconVoloco01Icon";
var IconVoloco01Icon_default = IconVoloco01Icon;
