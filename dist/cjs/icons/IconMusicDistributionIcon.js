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
var IconMusicDistributionIcon_exports = {};
__export(IconMusicDistributionIcon_exports, {
  default: () => IconMusicDistributionIcon_default
});
module.exports = __toCommonJS(IconMusicDistributionIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconMusicDistributionIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 2a5 5 0 0 1 5 5m-5-2a2 2 0 0 1 2 2m-8.884 8.635v-5.238c0-.444.27-.844.683-1.008L14.6 7.87a1.085 1.085 0 0 1 1.489 1.008v5.672M11.5 3H6.222A4.22 4.22 0 0 0 2 7.222v9.5A5.28 5.28 0 0 0 7.278 22h9.5A4.22 4.22 0 0 0 21 17.778V12.5M9.64 14.482a1.63 1.63 0 1 1-2.307 2.304 1.63 1.63 0 0 1 2.306-2.304m5.972-1.085a1.63 1.63 0 1 1-2.307 2.304 1.63 1.63 0 0 1 2.307-2.304" })
    }
  )
);
IconMusicDistributionIcon.displayName = "IconMusicDistributionIcon";
var IconMusicDistributionIcon_default = IconMusicDistributionIcon;
