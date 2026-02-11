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
var BaseIconUserInfoIcon_exports = {};
__export(BaseIconUserInfoIcon_exports, {
  default: () => BaseIconUserInfoIcon_default
});
module.exports = __toCommonJS(BaseIconUserInfoIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconUserInfoIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 14.5H8.5c-1.4 0-2.1 0-2.66.17a4 4 0 0 0-2.67 2.67C3 17.9 3 18.6 3 20m14.5-.5V18m0-2.5h.01m-2.01-9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m6.5 11a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" })
    }
  )
);
BaseIconUserInfoIcon.displayName = "BaseIconUserInfoIcon";
var BaseIconUserInfoIcon_default = BaseIconUserInfoIcon;
