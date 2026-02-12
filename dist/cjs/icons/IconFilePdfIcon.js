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
var IconFilePdfIcon_exports = {};
__export(IconFilePdfIcon_exports, {
  default: () => IconFilePdfIcon_default
});
module.exports = __toCommonJS(IconFilePdfIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconFilePdfIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M18 8l-6-6H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311M5 16.5v-2m0 0v-3h2.5S9 11.5 9 13s-1.5 1.5-1.5 1.5zm13 2v-2m2.5-3H18v3m2.5 0H18m-6.5 2h1.333c.89 0 2.667-.5 2.667-2.5s-1.778-2.5-2.667-2.5H11.5z" })
    }
  )
);
IconFilePdfIcon.displayName = "IconFilePdfIcon";
var IconFilePdfIcon_default = IconFilePdfIcon;
