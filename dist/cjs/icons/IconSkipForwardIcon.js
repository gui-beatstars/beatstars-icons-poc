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
var IconSkipForwardIcon_exports = {};
__export(IconSkipForwardIcon_exports, {
  default: () => IconSkipForwardIcon_default
});
module.exports = __toCommonJS(IconSkipForwardIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconSkipForwardIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M20 4v16M7.319 18.845l7.454-5.4c.682-.494 1.023-.741 1.146-1.04.108-.26.108-.55 0-.81-.123-.299-.464-.546-1.146-1.04l-7.454-5.4C6.256 4.385 5.725 4 5.279 4c-.39 0-.758.16-1 .435C4 4.75 4 5.367 4 6.6v10.8c0 1.233 0 1.849.279 2.165.242.275.61.435 1 .435.446 0 .977-.385 2.04-1.155" })
    }
  )
);
IconSkipForwardIcon.displayName = "IconSkipForwardIcon";
var IconSkipForwardIcon_default = IconSkipForwardIcon;
