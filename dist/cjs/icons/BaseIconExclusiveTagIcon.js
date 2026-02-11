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
var BaseIconExclusiveTagIcon_exports = {};
__export(BaseIconExclusiveTagIcon_exports, {
  default: () => BaseIconExclusiveTagIcon_default
});
module.exports = __toCommonJS(BaseIconExclusiveTagIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconExclusiveTagIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.667 14.652V9.42c0-.216 0-.325.039-.412a.45.45 0 0 1 .159-.19c.08-.054.185-.072.396-.107l3.911-.66c.285-.047.427-.071.538-.03.098.037.18.107.231.198.059.104.059.25.059.542v4.992m-5.333.899A1.34 1.34 0 0 1 8.333 16 1.34 1.34 0 0 1 7 14.652a1.34 1.34 0 0 1 1.333-1.348 1.34 1.34 0 0 1 1.334 1.348M15 13.753a1.34 1.34 0 0 1-1.333 1.348 1.34 1.34 0 0 1-1.334-1.348 1.34 1.34 0 0 1 1.334-1.348A1.34 1.34 0 0 1 15 13.753M7.334 3.82a3.83 3.83 0 0 0 2.18-.904 3.83 3.83 0 0 1 4.972 0c.613.523 1.376.84 2.18.904a3.83 3.83 0 0 1 3.515 3.515 3.82 3.82 0 0 0 .904 2.18 3.83 3.83 0 0 1 0 4.972 3.83 3.83 0 0 0-.904 2.18 3.83 3.83 0 0 1-3.515 3.515 3.83 3.83 0 0 0-2.18.904 3.83 3.83 0 0 1-4.972 0 3.83 3.83 0 0 0-2.18-.904 3.83 3.83 0 0 1-3.515-3.515 3.83 3.83 0 0 0-.904-2.18 3.83 3.83 0 0 1 0-4.972c.523-.613.84-1.376.904-2.18A3.83 3.83 0 0 1 7.334 3.82" })
    }
  )
);
BaseIconExclusiveTagIcon.displayName = "BaseIconExclusiveTagIcon";
var BaseIconExclusiveTagIcon_default = BaseIconExclusiveTagIcon;
