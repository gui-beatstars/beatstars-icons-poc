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
var IconCoins01Icon_exports = {};
__export(IconCoins01Icon_exports, {
  default: () => IconCoins01Icon_default
});
module.exports = __toCommonJS(IconCoins01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconCoins01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 17a5 5 0 1 0 10 0 5 5 0 0 0-10 0m0 0c0-1.126.372-2.165 1-3V5m-1 12c0 .825.2 1.604.554 2.29-.842.712-2.788 1.21-5.054 1.21-3.037 0-5.5-.895-5.5-2V5m11 0c0 1.105-2.462 2-5.5 2S2 6.105 2 5m11 0c0-1.105-2.462-2-5.5-2S2 3.895 2 5m0 9c0 1.105 2.463 2 5.5 2 2.19 0 4.08-.465 4.965-1.138M13 9.5c0 1.105-2.462 2-5.5 2S2 10.605 2 9.5" })
    }
  )
);
IconCoins01Icon.displayName = "IconCoins01Icon";
var IconCoins01Icon_default = IconCoins01Icon;
