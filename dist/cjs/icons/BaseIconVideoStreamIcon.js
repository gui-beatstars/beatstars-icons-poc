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
var BaseIconVideoStreamIcon_exports = {};
__export(BaseIconVideoStreamIcon_exports, {
  default: () => BaseIconVideoStreamIcon_default
});
module.exports = __toCommonJS(BaseIconVideoStreamIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconVideoStreamIcon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21.58 7.2a2.5 2.5 0 0 0-1.76-1.82C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.82q-.44 2.38-.42 4.8-.02 2.45.42 4.85a2.5 2.5 0 0 0 1.76 1.75c1.57.41 7.82.41 7.82.41s6.25 0 7.82-.41a2.5 2.5 0 0 0 1.76-1.82q.43-2.37.42-4.77.02-2.45-.42-4.85" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.75 9.47c0-.48 0-.72.1-.85a.5.5 0 0 1 .36-.2c.17-.01.37.11.77.37l3.95 2.54c.34.22.52.33.58.48a.5.5 0 0 1 0 .38c-.06.15-.24.26-.58.48l-3.95 2.54c-.4.26-.6.38-.77.37a.5.5 0 0 1-.36-.2c-.1-.13-.1-.37-.1-.85z" })
      ]
    }
  )
);
BaseIconVideoStreamIcon.displayName = "BaseIconVideoStreamIcon";
var BaseIconVideoStreamIcon_default = BaseIconVideoStreamIcon;
