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
var IconNotePaperIcon_exports = {};
__export(IconNotePaperIcon_exports, {
  default: () => IconNotePaperIcon_default
});
module.exports = __toCommonJS(IconNotePaperIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconNotePaperIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8.83 7h6.829m-6.83 4h4.878m-8.78 4V7.8c0-1.68 0-2.52.319-3.162a2.97 2.97 0 0 1 1.279-1.311C7.15 3 7.97 3 9.61 3h8M4.927 15h11.707c-1.616 0-2.927 1.343-2.927 3s1.31 3 2.927 3M4.927 15C3.31 15 2 16.343 2 18s1.31 3 2.927 3h11.707m2.927-6.4V8C20.537 8 22 9 22 11m-5.366 10c1.617 0 2.927-1.343 2.927-3v-3.5" })
    }
  )
);
IconNotePaperIcon.displayName = "IconNotePaperIcon";
var IconNotePaperIcon_default = IconNotePaperIcon;
