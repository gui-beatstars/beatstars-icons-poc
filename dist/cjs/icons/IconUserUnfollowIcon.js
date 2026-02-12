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
var IconUserUnfollowIcon_exports = {};
__export(IconUserUnfollowIcon_exports, {
  default: () => IconUserUnfollowIcon_default
});
module.exports = __toCommonJS(IconUserUnfollowIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconUserUnfollowIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 14.5H8.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C3 17.907 3 18.604 3 20m18-5.5-2.75 2.75m0 0L15.5 20m2.75-2.75L15.5 14.5m2.75 2.75L21 20M15.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" })
    }
  )
);
IconUserUnfollowIcon.displayName = "IconUserUnfollowIcon";
var IconUserUnfollowIcon_default = IconUserUnfollowIcon;
