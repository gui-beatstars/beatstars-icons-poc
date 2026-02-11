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
var BaseIconMusicDistributionIcon_exports = {};
__export(BaseIconMusicDistributionIcon_exports, {
  default: () => BaseIconMusicDistributionIcon_default
});
module.exports = __toCommonJS(BaseIconMusicDistributionIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconMusicDistributionIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 2a5 5 0 0 1 5 5m-5-2a2 2 0 0 1 2 2m-8.88 8.63V10.4c0-.45.27-.85.68-1.01l3.8-1.52c.71-.29 1.49.24 1.49 1v5.68M11.5 3H6.22A4.2 4.2 0 0 0 2 7.22v9.5A5.3 5.3 0 0 0 7.28 22h9.5A4.2 4.2 0 0 0 21 17.78V12.5M9.64 14.48a1.63 1.63 0 1 1-2.3 2.3 1.63 1.63 0 0 1 2.3-2.3m5.97-1.08a1.63 1.63 0 1 1-2.3 2.3 1.63 1.63 0 0 1 2.3-2.3" })
    }
  )
);
BaseIconMusicDistributionIcon.displayName = "BaseIconMusicDistributionIcon";
var BaseIconMusicDistributionIcon_default = BaseIconMusicDistributionIcon;
