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
var IconGraphPieIcon_exports = {};
__export(IconGraphPieIcon_exports, {
  default: () => IconGraphPieIcon_default
});
module.exports = __toCommonJS(IconGraphPieIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconGraphPieIcon = (0, import_react.forwardRef)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.2 14c.277 0 .416 0 .528.062a.53.53 0 0 1 .22.243c.05.117.037.243.012.494A8 8 0 1 1 9.201 6.04c.251-.025.376-.038.494.012a.53.53 0 0 1 .243.22c.062.112.062.251.062.528v6.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055z" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 2.8c0-.277 0-.416.062-.528a.53.53 0 0 1 .243-.22c.117-.05.243-.037.494-.012A8 8 0 0 1 21.96 9.2c.025.251.038.376-.012.494a.53.53 0 0 1-.22.243c-.113.062-.251.062-.528.062h-6.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C14 9.62 14 9.48 14 9.2z" })
      ]
    }
  )
);
IconGraphPieIcon.displayName = "IconGraphPieIcon";
var IconGraphPieIcon_default = IconGraphPieIcon;
