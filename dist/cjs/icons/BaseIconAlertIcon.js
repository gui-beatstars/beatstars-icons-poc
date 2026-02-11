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
var BaseIconAlertIcon_exports = {};
__export(BaseIconAlertIcon_exports, {
  default: () => BaseIconAlertIcon_default
});
module.exports = __toCommonJS(BaseIconAlertIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconAlertIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v4m0 4h.01m8.215 3.5H4.248c-.903 0-1.354 0-1.617-.19a1 1 0 0 1-.408-.7c-.035-.322.188-.715.633-1.5l7.752-13.658c.456-.803.684-1.204.983-1.338a1 1 0 0 1 .818 0c.3.134.527.535.982 1.338l7.986 14.07c.24.422.36.633.39.802a1 1 0 0 1-.652 1.12c-.161.056-.404.056-.89.056" })
    }
  )
);
BaseIconAlertIcon.displayName = "BaseIconAlertIcon";
var BaseIconAlertIcon_default = BaseIconAlertIcon;
