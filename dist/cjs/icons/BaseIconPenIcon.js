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
var BaseIconPenIcon_exports = {};
__export(BaseIconPenIcon_exports, {
  default: () => BaseIconPenIcon_default
});
module.exports = __toCommonJS(BaseIconPenIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconPenIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 6 6.5 7.3c-.36.07-.54.1-.69.2a1 1 0 0 0-.33.3c-.09.15-.13.33-.22.7L2 22m0 0 13.5-3.26c.37-.09.55-.13.7-.22a1 1 0 0 0 .3-.33c.1-.15.13-.33.2-.7L18 11M2 22l7.59-7.59m11.28-6.54-4.74-4.74c-.4-.4-.6-.6-.82-.67a1 1 0 0 0-.62 0c-.23.08-.43.28-.82.67l-.74.74c-.4.4-.6.6-.67.82a1 1 0 0 0 0 .62c.08.23.28.43.67.82l4.74 4.74c.4.4.6.6.82.67a1 1 0 0 0 .62 0c.23-.08.43-.28.82-.67l.74-.74c.4-.4.6-.6.67-.82a1 1 0 0 0 0-.62c-.08-.23-.28-.43-.67-.82M11 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4" })
    }
  )
);
BaseIconPenIcon.displayName = "BaseIconPenIcon";
var BaseIconPenIcon_default = BaseIconPenIcon;
