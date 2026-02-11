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
var BaseIconHeartBrokenIcon_exports = {};
__export(BaseIconHeartBrokenIcon_exports, {
  default: () => BaseIconHeartBrokenIcon_default
});
module.exports = __toCommonJS(BaseIconHeartBrokenIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconHeartBrokenIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m11.19 13.56 2-4H10.5c-.43 0-.64 0-.77-.1a.5.5 0 0 1-.21-.33c-.02-.15.07-.35.26-.73l2.2-3.4m4.13-2C19.63 3 22 6.35 22 9.48 22 15.81 12.18 21 12 21S2 15.81 2 9.48C2 6.35 4.37 3 7.89 3A5.3 5.3 0 0 1 12 4.92 5.3 5.3 0 0 1 16.11 3" })
    }
  )
);
BaseIconHeartBrokenIcon.displayName = "BaseIconHeartBrokenIcon";
var BaseIconHeartBrokenIcon_default = BaseIconHeartBrokenIcon;
