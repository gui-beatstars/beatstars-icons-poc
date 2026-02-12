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
var IconFigmaIcon_exports = {};
__export(IconFigmaIcon_exports, {
  default: () => IconFigmaIcon_default
});
module.exports = __toCommonJS(IconFigmaIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconFigmaIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2H8.5a3.5 3.5 0 1 0 0 7M12 2v7m0-7h3.5a3.5 3.5 0 1 1 0 7M12 9H8.5M12 9h3.5M12 9v7M8.5 9a3.5 3.5 0 0 0 0 7m7-7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-7 7a3.5 3.5 0 1 0 3.5 3.5V16m-3.5 0H12" })
    }
  )
);
IconFigmaIcon.displayName = "IconFigmaIcon";
var IconFigmaIcon_default = IconFigmaIcon;
