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
var IconSend02Icon_exports = {};
__export(IconSend02Icon_exports, {
  default: () => IconSend02Icon_default
});
module.exports = __toCommonJS(IconSend02Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconSend02Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.602 13.398 20.43 3.57m-9.708 10.134 2.46 6.325c.216.557.324.836.48.917a.47.47 0 0 0 .432 0c.157-.08.265-.36.483-.916l6.168-15.806c.196-.503.294-.754.24-.915a.47.47 0 0 0-.295-.295c-.16-.054-.412.044-.915.24L3.97 9.423c-.557.218-.835.326-.916.483a.47.47 0 0 0 0 .431c.081.157.36.265.917.482l6.325 2.46c.113.043.17.065.217.1q.065.045.11.109c.034.047.056.104.1.217" })
    }
  )
);
IconSend02Icon.displayName = "IconSend02Icon";
var IconSend02Icon_default = IconSend02Icon;
