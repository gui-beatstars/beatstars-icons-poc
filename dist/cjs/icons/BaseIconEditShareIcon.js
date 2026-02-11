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
var BaseIconEditShareIcon_exports = {};
__export(BaseIconEditShareIcon_exports, {
  default: () => BaseIconEditShareIcon_default
});
module.exports = __toCommonJS(BaseIconEditShareIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconEditShareIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m21 15-6 6m1.13-5.25a.38.38 0 1 1-.76 0 .38.38 0 0 1 .76 0m4.5 4.5a.38.38 0 1 1-.76 0 .38.38 0 0 1 .75 0M3 20h1.67c.5 0 .74 0 .97-.06a2 2 0 0 0 .58-.23c.2-.13.37-.3.72-.65L19.5 6.5a2.12 2.12 0 0 0-3-3L3.94 16.06a5 5 0 0 0-.65.72 2 2 0 0 0-.23.58c-.06.23-.06.48-.06.97z" })
    }
  )
);
BaseIconEditShareIcon.displayName = "BaseIconEditShareIcon";
var BaseIconEditShareIcon_default = BaseIconEditShareIcon;
