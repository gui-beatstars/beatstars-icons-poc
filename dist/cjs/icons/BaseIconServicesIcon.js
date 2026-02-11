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
var BaseIconServicesIcon_exports = {};
__export(BaseIconServicesIcon_exports, {
  default: () => BaseIconServicesIcon_default
});
module.exports = __toCommonJS(BaseIconServicesIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconServicesIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m3.242 16.83 3.396-3.396c-.103-.31-.277-1.165-.154-2.118a5.61 5.61 0 0 1 3.825-4.599 5.3 5.3 0 0 1 3.36 0 .556.556 0 0 1 .21.923l-3.12 3.12 2.485 2.484 3.119-3.12a.556.556 0 0 1 .92.207 5.3 5.3 0 0 1-.003 3.357 5.55 5.55 0 0 1-6.48 3.738l-.235-.063-3.395 3.395m11.901-1.687c-3.905 3.905-10.237 3.905-14.142 0s-3.905-10.237 0-14.142 10.237-3.905 14.142 0 3.905 10.237 0 14.142" })
    }
  )
);
BaseIconServicesIcon.displayName = "BaseIconServicesIcon";
var BaseIconServicesIcon_default = BaseIconServicesIcon;
