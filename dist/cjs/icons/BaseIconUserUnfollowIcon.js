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
var BaseIconUserUnfollowIcon_exports = {};
__export(BaseIconUserUnfollowIcon_exports, {
  default: () => BaseIconUserUnfollowIcon_default
});
module.exports = __toCommonJS(BaseIconUserUnfollowIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconUserUnfollowIcon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      className,
      style,
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11 15.5a1 1 0 1 0 0-2zm-5.16-.83.29.96zM2 20a1 1 0 1 0 2 0zm1.17-2.66.96.29zm18.54-2.13a1 1 0 0 0-1.42-1.42l.71.71zm-6.92 4.08a1 1 0 0 0 1.42 1.42L15.5 20zm1.42-5.5a1 1 0 0 0-1.42 1.42l.71-.71zm4.08 6.92a1 1 0 0 0 1.42-1.42L21 20zM8.5 14.5v1H11v-2H8.5zm0 0v-1c-1.32 0-2.2-.01-2.95.22l.29.95.29.96c.39-.12.9-.13 2.37-.13zM3 20h1c0-1.47.01-1.98.13-2.37l-.96-.3-.95-.28C1.99 17.79 2 18.68 2 20zm2.84-5.33-.3-.95a5 5 0 0 0-3.32 3.33l.95.29.96.29a3 3 0 0 1 2-2zM15.5 6.5h-1A3.5 3.5 0 0 1 11 10v2a5.5 5.5 0 0 0 5.5-5.5zM11 11v-1a3.5 3.5 0 0 1-3.5-3.5h-2A5.5 5.5 0 0 0 11 12zM6.5 6.5h1A3.5 3.5 0 0 1 11 3V1a5.5 5.5 0 0 0-5.5 5.5zM11 2v1a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 11 1zm10 12.5-.7-.7-2.76 2.74.71.71.7.7 2.76-2.74zm-2.75 2.75-.7-.7-2.76 2.74.71.71.7.7 2.76-2.74zm0 0 .7-.7-2.74-2.76-.71.71-.7.7 2.74 2.76zm0 0-.7.7 2.74 2.76L21 20l.7-.7-2.74-2.76z" })
    }
  )
);
BaseIconUserUnfollowIcon.displayName = "BaseIconUserUnfollowIcon";
var BaseIconUserUnfollowIcon_default = BaseIconUserUnfollowIcon;
