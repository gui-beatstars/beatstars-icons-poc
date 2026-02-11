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
var BaseIconEdit02Icon_exports = {};
__export(BaseIconEdit02Icon_exports, {
  default: () => BaseIconEdit02Icon_default
});
module.exports = __toCommonJS(BaseIconEdit02Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconEdit02Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m17.43 10.29-3.72-3.72M3 21l3.15-.35c.39-.04.58-.06.76-.12q.24-.08.45-.22c.16-.1.3-.24.57-.51l12.3-12.3a2.63 2.63 0 1 0-3.73-3.73L4.2 16.07c-.27.27-.4.41-.51.57q-.15.22-.22.45c-.06.18-.08.37-.12.76z" })
    }
  )
);
BaseIconEdit02Icon.displayName = "BaseIconEdit02Icon";
var BaseIconEdit02Icon_default = BaseIconEdit02Icon;
