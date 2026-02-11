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
var BaseIconDropboxLogoIcon_exports = {};
__export(BaseIconDropboxLogoIcon_exports, {
  default: () => BaseIconDropboxLogoIcon_default
});
module.exports = __toCommonJS(BaseIconDropboxLogoIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDropboxLogoIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6.1 10.07 12 6.21m-5.9 3.86L1.5 6.86 7.4 3 12 6.21m-5.9 3.86 5.9 3.86m-5.9-3.86L1.5 13.3l5.9 3.85 4.6-3.21m0-7.72 5.9 3.86M12 6.21 16.6 3l5.9 3.86-4.6 3.21M12 13.93l5.9-3.86M12 13.93l4.6 3.21 5.9-3.85-4.6-3.22m-.65 7.07v1.41L12 21l-5.25-2.45v-1.4" })
    }
  )
);
BaseIconDropboxLogoIcon.displayName = "BaseIconDropboxLogoIcon";
var BaseIconDropboxLogoIcon_default = BaseIconDropboxLogoIcon;
