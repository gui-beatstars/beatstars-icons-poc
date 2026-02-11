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
var BaseIconDocumentSignIcon_exports = {};
__export(BaseIconDocumentSignIcon_exports, {
  default: () => BaseIconDocumentSignIcon_default
});
module.exports = __toCommonJS(BaseIconDocumentSignIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDocumentSignIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6.24 8.3h6.29m-6.3 3.17h4.18M7 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1m-5.76 6.6 2.58 2.57m1.82-1.82.95.95c.5.5.5 1.31 0 1.82l-1.73 1.73m-5.57 1.84q-.31.3-.74.31H10.4v-2.13q0-.44.31-.75l7.17-7.17a1.82 1.82 0 1 1 2.58 2.57z" })
    }
  )
);
BaseIconDocumentSignIcon.displayName = "BaseIconDocumentSignIcon";
var BaseIconDocumentSignIcon_default = BaseIconDocumentSignIcon;
