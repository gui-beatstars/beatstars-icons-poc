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
var IconErrorGenericIcon_exports = {};
__export(IconErrorGenericIcon_exports, {
  default: () => IconErrorGenericIcon_default
});
module.exports = __toCommonJS(IconErrorGenericIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconErrorGenericIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2.996 7.998h18.008M9.999 21.004H4.997a2 2 0 0 1-2-2.001V4.997a2 2 0 0 1 2-2h14.006a2 2 0 0 1 2 2V10M18.5 18.788l-3.281-3.281m0 3.28 3.281-3.28M16.998 12a5.002 5.002 0 1 1-3.672 1.61m8.679 3.388a5.002 5.002 0 1 1-1.61-3.672m-9.53-7.834-.005.005.006.005.005-.005zm-2.54 0-.005.005.005.005.005-.005zm-2.549-.005-.005.005.005.005.005-.005z" })
    }
  )
);
IconErrorGenericIcon.displayName = "IconErrorGenericIcon";
var IconErrorGenericIcon_default = IconErrorGenericIcon;
