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
var BaseIconFilterIcon_exports = {};
__export(BaseIconFilterIcon_exports, {
  default: () => BaseIconFilterIcon_default
});
module.exports = __toCommonJS(BaseIconFilterIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconFilterIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.06 6.4C3.36 5.64 3.01 5.26 3 4.94a.9.9 0 0 1 .33-.73C3.6 4 4.11 4 5.16 4h13.68c1.05 0 1.57 0 1.83.2a.9.9 0 0 1 .33.74c-.01.32-.36.7-1.06 1.46l-5.26 5.75q-.19.2-.26.31l-.1.25c-.02.1-.02.2-.02.4v4.82q0 .24-.02.34l-.13.17q-.07.08-.3.16l-3.14 1.22c-.34.14-.51.2-.65.17a.5.5 0 0 1-.29-.19c-.07-.11-.07-.29-.07-.65v-6.04c0-.2 0-.3-.03-.4l-.1-.25q-.05-.1-.25-.31z" })
    }
  )
);
BaseIconFilterIcon.displayName = "BaseIconFilterIcon";
var BaseIconFilterIcon_default = BaseIconFilterIcon;
