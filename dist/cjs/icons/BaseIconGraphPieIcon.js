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
var BaseIconGraphPieIcon_exports = {};
__export(BaseIconGraphPieIcon_exports, {
  default: () => BaseIconGraphPieIcon_default
});
module.exports = __toCommonJS(BaseIconGraphPieIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconGraphPieIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.2 14c.28 0 .42 0 .53.06q.15.09.22.24c.05.12.04.25.01.5A8 8 0 1 1 9.2 6.04c.25-.03.38-.04.5.01q.16.07.24.22c.06.11.06.25.06.53v6.4c0 .28 0 .42.05.53q.08.15.22.22c.11.05.25.05.53.05zM14 2.8c0-.28 0-.42.06-.53q.09-.15.24-.22c.12-.05.25-.04.5-.01a8 8 0 0 1 7.16 7.16c.03.25.04.38-.01.5q-.07.16-.22.24c-.11.06-.25.06-.53.06h-6.4c-.28 0-.42 0-.53-.05a.5.5 0 0 1-.22-.22C14 9.62 14 9.48 14 9.2z" })
    }
  )
);
BaseIconGraphPieIcon.displayName = "BaseIconGraphPieIcon";
var BaseIconGraphPieIcon_default = BaseIconGraphPieIcon;
