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
var IconFileDawIcon_exports = {};
__export(IconFileDawIcon_exports, {
  default: () => IconFileDawIcon_default
});
module.exports = __toCommonJS(IconFileDawIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconFileDawIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M18 8l-6-6H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311M11 17l.275-.625M15.5 17l-.287-.625M22 12l-1 5-1.5-4-1.5 4-1-5m-5.725 4.375.275-.625.55-1.25 1.1-2.5 1.15 2.5.575 1.25.287.625m-3.937 0h3.938M5 17h1.333C7.223 17 9 16.5 9 14.5S7.222 12 6.333 12H5z" })
    }
  )
);
IconFileDawIcon.displayName = "IconFileDawIcon";
var IconFileDawIcon_default = IconFileDawIcon;
