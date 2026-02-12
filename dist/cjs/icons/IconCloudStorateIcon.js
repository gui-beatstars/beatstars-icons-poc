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
var IconCloudStorateIcon_exports = {};
__export(IconCloudStorateIcon_exports, {
  default: () => IconCloudStorateIcon_default
});
module.exports = __toCommonJS(IconCloudStorateIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconCloudStorateIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 19H6.5a4.5 4.5 0 0 1-.42-8.98A6.002 6.002 0 0 1 17 7.681m-1.158 10.483v-5.782a.99.99 0 0 1 .595-.92l4.264-1.39c.622-.262 1.299.218 1.299.92v6.179m-6.574.286a1.54 1.54 0 0 1 0 2.106 1.375 1.375 0 0 1-2.01 0 1.54 1.54 0 0 1 0-2.106 1.376 1.376 0 0 1 2.01 0m6.158-.993a1.54 1.54 0 0 1 0 2.106 1.375 1.375 0 0 1-2.01 0 1.54 1.54 0 0 1 0-2.106 1.376 1.376 0 0 1 2.01 0" })
    }
  )
);
IconCloudStorateIcon.displayName = "IconCloudStorateIcon";
var IconCloudStorateIcon_default = IconCloudStorateIcon;
