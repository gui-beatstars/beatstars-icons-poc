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
var IconPlayerPlayIcon_exports = {};
__export(IconPlayerPlayIcon_exports, {
  default: () => IconPlayerPlayIcon_default
});
module.exports = __toCommonJS(IconPlayerPlayIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconPlayerPlayIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 5.09c0-.957 0-1.436.2-1.7a1 1 0 0 1 .727-.389c.33-.02.73.246 1.526.777l10.37 6.91c.658.438.987.658 1.102.934.1.242.1.514 0 .756-.115.276-.444.495-1.103.934l-10.369 6.91c-.797.531-1.195.797-1.526.777a1 1 0 0 1-.727-.39c-.2-.263-.2-.742-.2-1.699z" })
    }
  )
);
IconPlayerPlayIcon.displayName = "IconPlayerPlayIcon";
var IconPlayerPlayIcon_default = IconPlayerPlayIcon;
