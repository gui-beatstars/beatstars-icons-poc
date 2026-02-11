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
var BaseIconPlayerPlayIcon_exports = {};
__export(BaseIconPlayerPlayIcon_exports, {
  default: () => BaseIconPlayerPlayIcon_default
});
module.exports = __toCommonJS(BaseIconPlayerPlayIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconPlayerPlayIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 5.09c0-.96 0-1.44.2-1.7A1 1 0 0 1 6.93 3c.33-.02.73.25 1.52.78l10.37 6.9c.66.45.99.67 1.1.94q.15.38 0 .76c-.11.27-.44.5-1.1.93L8.45 20.22c-.8.53-1.2.8-1.52.78a1 1 0 0 1-.73-.39c-.2-.26-.2-.74-.2-1.7z" })
    }
  )
);
BaseIconPlayerPlayIcon.displayName = "BaseIconPlayerPlayIcon";
var BaseIconPlayerPlayIcon_default = BaseIconPlayerPlayIcon;
