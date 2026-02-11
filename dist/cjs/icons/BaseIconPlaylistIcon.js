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
var BaseIconPlaylistIcon_exports = {};
__export(BaseIconPlaylistIcon_exports, {
  default: () => BaseIconPlaylistIcon_default
});
module.exports = __toCommonJS(BaseIconPlaylistIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconPlaylistIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.778 15.333H2m12.222-5.666H2M20.889 4H2m20 7.933L18.667 10.8v7.933m-.651-1.602c.868.885.868 2.32 0 3.205a2.19 2.19 0 0 1-3.143 0 2.3 2.3 0 0 1 0-3.205 2.19 2.19 0 0 1 3.143 0" })
    }
  )
);
BaseIconPlaylistIcon.displayName = "BaseIconPlaylistIcon";
var BaseIconPlaylistIcon_default = BaseIconPlaylistIcon;
