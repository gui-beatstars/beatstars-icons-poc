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
var BaseIconSettingsIcon_exports = {};
__export(BaseIconSettingsIcon_exports, {
  default: () => BaseIconSettingsIcon_default
});
module.exports = __toCommonJS(BaseIconSettingsIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconSettingsIcon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18.73 14.73a1.5 1.5 0 0 0 .3 1.65l.05.06A1.82 1.82 0 1 1 16.51 19l-.06-.06a1.5 1.5 0 0 0-1.65-.3 1.5 1.5 0 0 0-.9 1.38v.15a1.82 1.82 0 1 1-3.65 0v-.08a1.5 1.5 0 0 0-.98-1.37 1.5 1.5 0 0 0-1.65.3l-.06.05A1.82 1.82 0 1 1 5 16.51l.06-.06a1.5 1.5 0 0 0 .3-1.65 1.5 1.5 0 0 0-1.38-.9h-.15a1.82 1.82 0 1 1 0-3.65h.08a1.5 1.5 0 0 0 1.37-.98 1.5 1.5 0 0 0-.3-1.65l-.05-.06A1.82 1.82 0 1 1 7.49 5l.06.06a1.5 1.5 0 0 0 1.65.3h.07a1.5 1.5 0 0 0 .91-1.38v-.15a1.82 1.82 0 0 1 3.64 0v.08a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.66-.3l.06-.05A1.82 1.82 0 1 1 19 7.49l-.06.06a1.5 1.5 0 0 0-.3 1.65v.07a1.5 1.5 0 0 0 1.38.91h.15a1.82 1.82 0 0 1 0 3.64h-.08a1.5 1.5 0 0 0-1.37.9" })
      ]
    }
  )
);
BaseIconSettingsIcon.displayName = "BaseIconSettingsIcon";
var BaseIconSettingsIcon_default = BaseIconSettingsIcon;
