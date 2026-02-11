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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11 15.5a1 1 0 1 0 0-2zm-5.161-.828.29.957zM2 20a1 1 0 1 0 2 0zm1.172-2.661.957.29zm18.535-2.132a1 1 0 0 0-1.414-1.414L21 14.5zm-6.914 4.086a1 1 0 0 0 1.414 1.414L15.5 20zm1.414-5.5a1 1 0 0 0-1.414 1.414l.707-.707zm4.086 6.914a1 1 0 0 0 1.414-1.414L21 20zM8.5 14.5v1H11v-2H8.5zm0 0v-1c-1.323 0-2.206-.01-2.951.215l.29.957.29.957c.39-.118.903-.129 2.371-.129zM3 20h1c0-1.468.01-1.98.13-2.37l-.958-.291-.957-.29C1.99 17.794 2 18.677 2 20zm2.839-5.328-.29-.957a5 5 0 0 0-3.334 3.334l.957.29.957.29a3 3 0 0 1 2-2zM15.5 6.5h-1A3.5 3.5 0 0 1 11 10v2a5.5 5.5 0 0 0 5.5-5.5zM11 11v-1a3.5 3.5 0 0 1-3.5-3.5h-2A5.5 5.5 0 0 0 11 12zM6.5 6.5h1A3.5 3.5 0 0 1 11 3V1a5.5 5.5 0 0 0-5.5 5.5zM11 2v1a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 11 1zm10 12.5-.707-.707-2.75 2.75.707.707.707.707 2.75-2.75zm-2.75 2.75-.707-.707-2.75 2.75.707.707.707.707 2.75-2.75zm0 0 .707-.707-2.75-2.75-.707.707-.707.707 2.75 2.75zm0 0-.707.707 2.75 2.75L21 20l.707-.707-2.75-2.75z" })
    }
  )
);
BaseIconUserUnfollowIcon.displayName = "BaseIconUserUnfollowIcon";
var BaseIconUserUnfollowIcon_default = BaseIconUserUnfollowIcon;
