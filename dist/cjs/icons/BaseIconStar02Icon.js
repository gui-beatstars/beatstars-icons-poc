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
var BaseIconStar02Icon_exports = {};
__export(BaseIconStar02Icon_exports, {
  default: () => BaseIconStar02Icon_default
});
module.exports = __toCommonJS(BaseIconStar02Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconStar02Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m6.5 13 .78 1.57c.27.53.4.8.58 1.03a3 3 0 0 0 .54.54c.23.18.5.31 1.03.58l1.57.78-1.57.78c-.53.27-.8.4-1.03.58a3 3 0 0 0-.54.54c-.18.23-.31.5-.58 1.03L6.5 22l-.78-1.57c-.27-.53-.4-.8-.58-1.03a3 3 0 0 0-.54-.54c-.23-.18-.5-.31-1.03-.58L2 17.5l1.57-.78c.53-.27.8-.4 1.03-.58a3 3 0 0 0 .54-.54c.18-.23.31-.5.58-1.03zM15 2l1.18 3.06c.28.74.42 1.1.64 1.41a3 3 0 0 0 .7.7c.32.23.68.37 1.42.65L22 9l-3.06 1.18c-.74.28-1.1.42-1.41.64a3 3 0 0 0-.7.7c-.23.32-.37.68-.65 1.42L15 16l-1.18-3.06a6 6 0 0 0-.64-1.41 3 3 0 0 0-.7-.7 6 6 0 0 0-1.42-.65L8 9l3.06-1.18c.74-.28 1.1-.42 1.41-.64a3 3 0 0 0 .7-.7c.23-.32.37-.68.65-1.42z" })
    }
  )
);
BaseIconStar02Icon.displayName = "BaseIconStar02Icon";
var BaseIconStar02Icon_default = BaseIconStar02Icon;
