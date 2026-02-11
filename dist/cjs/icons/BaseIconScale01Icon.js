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
var BaseIconScale01Icon_exports = {};
__export(BaseIconScale01Icon_exports, {
  default: () => BaseIconScale01Icon_default
});
module.exports = __toCommonJS(BaseIconScale01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconScale01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2 17v-.15c0-.317 0-.475.024-.63a2 2 0 0 1 .107-.4c.055-.146.134-.283.29-.558L6 9m-4 8a4 4 0 0 0 8 0m-8 0v-.2c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218C2.38 16 2.52 16 2.8 16h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.2M6 9l3.578 6.262c.157.275.236.412.291.558a2 2 0 0 1 .107.4c.024.155.024.313.024.63V17M6 9l12-2m-4 8v-.15c0-.317 0-.475.024-.63q.033-.205.107-.4c.055-.146.134-.283.29-.558L18 7m-4 8a4 4 0 0 0 8 0m-8 0v-.2c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C14.38 14 14.52 14 14.8 14h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.2m-4-8 3.578 6.262c.157.275.236.412.291.558q.075.196.107.4c.024.155.024.313.024.63V15M12 3v5" })
    }
  )
);
BaseIconScale01Icon.displayName = "BaseIconScale01Icon";
var BaseIconScale01Icon_default = BaseIconScale01Icon;
