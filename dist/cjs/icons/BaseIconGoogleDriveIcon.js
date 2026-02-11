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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22.5 15.462 15.048 3H8.274M22.5 15.462h-6.097L8.274 3M22.5 15.462H7.597L4.21 21m18.29-5.539L19.113 21H4.21M8.274 3 1.5 15.462 4.21 21M8.274 3l3.596 5.512L4.21 21" })
    }
  )
);
BaseIconGoogleDriveIcon.displayName = "BaseIconGoogleDriveIcon";
var BaseIconGoogleDriveIcon_default = BaseIconGoogleDriveIcon;
