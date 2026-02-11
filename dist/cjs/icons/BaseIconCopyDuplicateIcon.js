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
var BaseIconCopyDuplicateIcon_exports = {};
__export(BaseIconCopyDuplicateIcon_exports, {
  default: () => BaseIconCopyDuplicateIcon_default
});
module.exports = __toCommonJS(BaseIconCopyDuplicateIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconCopyDuplicateIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 15c-.93 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C2 13.4 2 12.93 2 12V5.2c0-1.12 0-1.68.22-2.1a2 2 0 0 1 .87-.88C3.52 2 4.08 2 5.2 2H12c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08C15 3.6 15 4.07 15 5m-2.8 17h6.6c1.12 0 1.68 0 2.1-.22a2 2 0 0 0 .88-.87c.22-.43.22-.99.22-2.11v-6.6c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88C20.48 9 19.92 9 18.8 9h-6.6c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C9 10.52 9 11.08 9 12.2v6.6c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22" })
    }
  )
);
BaseIconCopyDuplicateIcon.displayName = "BaseIconCopyDuplicateIcon";
var BaseIconCopyDuplicateIcon_default = BaseIconCopyDuplicateIcon;
