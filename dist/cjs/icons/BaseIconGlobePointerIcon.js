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
var BaseIconGlobePointerIcon_exports = {};
__export(BaseIconGlobePointerIcon_exports, {
  default: () => BaseIconGlobePointerIcon_default
});
module.exports = __toCommonJS(BaseIconGlobePointerIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconGlobePointerIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m2.69 14.65 1.9-1.1a.5.5 0 0 1 .35-.06l3.75.7a.5.5 0 0 0 .6-.5l-.02-3.29.07-.25 1.9-3.24a.5.5 0 0 0-.03-.54L8 1.83m11 2.03C13.5 6.5 16.5 10 17.5 10.5c1.88.94 4.49 1 4.49 1L22 11a10 10 0 1 0-9.5 9.99m4.26-.05-3.17-8.35 8.35 3.17-3.7 1.48z" })
    }
  )
);
BaseIconGlobePointerIcon.displayName = "BaseIconGlobePointerIcon";
var BaseIconGlobePointerIcon_default = BaseIconGlobePointerIcon;
