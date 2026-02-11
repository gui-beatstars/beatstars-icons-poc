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
var BaseIconDashboard01Icon_exports = {};
__export(BaseIconDashboard01Icon_exports, {
  default: () => BaseIconDashboard01Icon_default
});
module.exports = __toCommonJS(BaseIconDashboard01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconDashboard01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M22 12a10 10 0 0 1-20 0m20 0A10 10 0 0 0 12 2m10 10h-2.5M2 12A10 10 0 0 1 12 2M2 12h2.5M12 2v2.5m7.08.5-5.58 5.5m5.58 8.58-.2-.2a9 9 0 0 0-1.45-1.3 4 4 0 0 0-1.15-.47c-.46-.11-.95-.11-1.93-.11h-4.7c-.98 0-1.47 0-1.93.11a4 4 0 0 0-1.15.48c-.4.25-.75.6-1.44 1.28l-.2.2M4.92 5l1.73 1.74M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" })
    }
  )
);
BaseIconDashboard01Icon.displayName = "BaseIconDashboard01Icon";
var BaseIconDashboard01Icon_default = BaseIconDashboard01Icon;
