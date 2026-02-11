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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 2.46a10 10 0 1 0 5.8 4.8M10.5 21.89v-2.2a.5.5 0 0 1 .12-.33l2.49-2.9a.5.5 0 0 0-.14-.76l-2.85-1.63-.19-.19-1.86-3.26a.5.5 0 0 0-.48-.25l-5.53.5M21 6c0 2.2-2 4-4 6-2-2-4-3.8-4-6a4 4 0 0 1 8 0m-3.75-.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0" })
    }
  )
);
BaseIconGlobe05Icon.displayName = "BaseIconGlobe05Icon";
var BaseIconGlobe05Icon_default = BaseIconGlobe05Icon;
