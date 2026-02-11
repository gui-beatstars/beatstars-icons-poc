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
var BaseIconKeysIcon_exports = {};
__export(BaseIconKeysIcon_exports, {
  default: () => BaseIconKeysIcon_default
});
module.exports = __toCommonJS(BaseIconKeysIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconKeysIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m11.56 10.35.32 1.21.94 3.51 1.3 4.83c.26.97-.4 2-1.46 2.28-1.07.28-2.15-.27-2.4-1.24m1.3-10.59-.74-2.74m.74 2.74q.43-.23.94-.37c2.13-.57 4.28.54 4.8 2.48.65 2.43-.99 4.97-3.65 5.69-2.67.71-5.35-.65-6-3.1-.16-.55-.92-3.4 3.17-7.44m0 0L9.88 4.1c-.26-.97.4-2 1.46-2.28 1.07-.28 2.15.27 2.4 1.24.57 2.1-1.79 3.62-2.92 4.55" })
    }
  )
);
BaseIconKeysIcon.displayName = "BaseIconKeysIcon";
var BaseIconKeysIcon_default = BaseIconKeysIcon;
