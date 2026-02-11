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
var BaseIconDiskCollectionIcon_exports = {};
__export(BaseIconDiskCollectionIcon_exports, {
  default: () => BaseIconDiskCollectionIcon_default
});
module.exports = __toCommonJS(BaseIconDiskCollectionIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDiskCollectionIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.82 2.5h12.36m-3.63 8.47a3.76 3.76 0 0 1 0 5.23 3.55 3.55 0 0 1-5.1 0 3.76 3.76 0 0 1 0-5.23 3.55 3.55 0 0 1 5.1 0m4.39-5.3H5.06A2.1 2.1 0 0 0 3 7.92l.76 11.6a2.1 2.1 0 0 0 2.06 1.98h12.36c1.09 0 1.99-.86 2.06-1.97L21 7.92a2.1 2.1 0 0 0-2.06-2.25" })
    }
  )
);
BaseIconDiskCollectionIcon.displayName = "BaseIconDiskCollectionIcon";
var BaseIconDiskCollectionIcon_default = BaseIconDiskCollectionIcon;
