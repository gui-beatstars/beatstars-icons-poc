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
var BaseIconGoogleDriveIcon_exports = {};
__export(BaseIconGoogleDriveIcon_exports, {
  default: () => BaseIconGoogleDriveIcon_default
});
module.exports = __toCommonJS(BaseIconGoogleDriveIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconGoogleDriveIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22.5 15.46 15.05 3H8.27M22.5 15.46h-6.1L8.27 3M22.5 15.46H7.6L4.2 21m18.29-5.54L19.11 21H4.21M8.27 3 1.5 15.46 4.21 21M8.27 3l3.6 5.51L4.21 21" })
    }
  )
);
BaseIconGoogleDriveIcon.displayName = "BaseIconGoogleDriveIcon";
var BaseIconGoogleDriveIcon_default = BaseIconGoogleDriveIcon;
