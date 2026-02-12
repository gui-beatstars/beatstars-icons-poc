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
var IconGiftCardIcon_exports = {};
__export(IconGiftCardIcon_exports, {
  default: () => IconGiftCardIcon_default
});
module.exports = __toCommonJS(IconGiftCardIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconGiftCardIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22 12.5H2m9 5H6m6-10H7.5a2.5 2.5 0 1 1 0-5c3.5 0 4.5 5 4.5 5m0 0h4.5a2.5 2.5 0 0 0 0-5c-3.5 0-4.5 5-4.5 5M2 10.7v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 19.98 22 19.42 22 18.3v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 7.5 19.92 7.5 18.8 7.5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 9.02 2 9.58 2 10.7" })
    }
  )
);
IconGiftCardIcon.displayName = "IconGiftCardIcon";
var IconGiftCardIcon_default = IconGiftCardIcon;
