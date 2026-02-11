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
var BaseIconGlobe05Icon_exports = {};
__export(BaseIconGlobe05Icon_exports, {
  default: () => BaseIconGlobe05Icon_default
});
module.exports = __toCommonJS(BaseIconGlobe05Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconGlobe05Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 2.458A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.715-.432-3.33-1.193-4.74M17 5.75h.005M10.5 21.888v-2.203a.5.5 0 0 1 .12-.325l2.486-2.9a.5.5 0 0 0-.131-.76l-2.857-1.632a.5.5 0 0 1-.186-.187L8.07 10.62a.5.5 0 0 0-.478-.25l-5.528.492M21 6c0 2.21-2 4-4 6-2-2-4-3.79-4-6a4 4 0 0 1 8 0m-3.75-.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0" })
    }
  )
);
BaseIconGlobe05Icon.displayName = "BaseIconGlobe05Icon";
var BaseIconGlobe05Icon_default = BaseIconGlobe05Icon;
