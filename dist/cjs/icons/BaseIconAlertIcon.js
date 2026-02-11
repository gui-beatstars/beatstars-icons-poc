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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v4m8.21 7.5H4.25c-.9 0-1.36 0-1.62-.19a1 1 0 0 1-.4-.7c-.04-.32.18-.71.63-1.5L10.6 4.45c.45-.8.68-1.2.98-1.34a1 1 0 0 1 .82 0c.3.14.53.54.98 1.34l7.99 14.07c.24.42.36.64.39.8a1 1 0 0 1-.65 1.12c-.17.06-.4.06-.9.06" })
    }
  )
);
BaseIconAlertIcon.displayName = "BaseIconAlertIcon";
var BaseIconAlertIcon_default = BaseIconAlertIcon;
