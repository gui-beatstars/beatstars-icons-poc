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
var IconDeviceDesktopIcon_exports = {};
__export(IconDeviceDesktopIcon_exports, {
  default: () => IconDeviceDesktopIcon_default
});
module.exports = __toCommonJS(IconDeviceDesktopIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconDeviceDesktopIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14.727 16.444V20m0 0H9.273m5.454 0h.91m-6.364 0v-3.556m0 3.556h-.91m-2.545-3.556h12.364c1.018 0 2.436 0 2.825-.193.342-.17.62-.443.795-.777.198-.38.198-.878.198-1.874V6.844c0-.995 0-1.493-.198-1.873a1.8 1.8 0 0 0-.795-.777C20.618 4 19.2 4 18.182 4H5.818C4.8 4 3.382 4 2.993 4.194c-.342.17-.62.442-.795.777C2 5.35 2 5.849 2 6.844V13.6c0 .996 0 1.494.198 1.874.174.334.453.606.795.777.389.193 1.807.193 2.825.193" })
    }
  )
);
IconDeviceDesktopIcon.displayName = "IconDeviceDesktopIcon";
var IconDeviceDesktopIcon_default = IconDeviceDesktopIcon;
