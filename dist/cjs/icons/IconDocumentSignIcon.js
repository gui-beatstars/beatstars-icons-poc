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
var IconDocumentSignIcon_exports = {};
__export(IconDocumentSignIcon_exports, {
  default: () => IconDocumentSignIcon_default
});
module.exports = __toCommonJS(IconDocumentSignIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconDocumentSignIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6.238 8.294h6.291m-6.291 3.177h4.174M7 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1m-5.756 6.598 2.573 2.573m1.825-1.826.953.953a1.29 1.29 0 0 1 0 1.82l-1.737 1.737m-5.564 1.835c-.199.198-.468.31-.749.31h-2.133v-2.134c0-.28.111-.55.31-.748l7.167-7.172a1.822 1.822 0 1 1 2.577 2.577z" })
    }
  )
);
IconDocumentSignIcon.displayName = "IconDocumentSignIcon";
var IconDocumentSignIcon_default = IconDocumentSignIcon;
