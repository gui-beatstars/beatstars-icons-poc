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
var BaseIconMegaphoneIcon_exports = {};
__export(BaseIconMegaphoneIcon_exports, {
  default: () => BaseIconMegaphoneIcon_default
});
module.exports = __toCommonJS(BaseIconMegaphoneIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconMegaphoneIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22 8v4M10.25 5.5H6.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C2 7.79 2 8.63 2 10.3v1.2c0 .93 0 1.4.15 1.77a2 2 0 0 0 1.08 1.08c.37.15.84.15 1.77.15v4.25l.01.45a2 2 0 0 0 1.8 1.79l.44.01.45-.01a2 2 0 0 0 1.79-1.8l.01-.44V14.5h.75c1.77 0 3.93.95 5.6 1.86.97.53 1.45.8 1.77.75q.44-.05.7-.4c.18-.27.18-.8.18-1.84V5.13c0-1.05 0-1.57-.19-1.83a1 1 0 0 0-.69-.41c-.32-.04-.8.22-1.78.75-1.66.91-3.82 1.86-5.59 1.86" })
    }
  )
);
BaseIconMegaphoneIcon.displayName = "BaseIconMegaphoneIcon";
var BaseIconMegaphoneIcon_default = BaseIconMegaphoneIcon;
