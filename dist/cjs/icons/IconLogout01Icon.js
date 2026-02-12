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
var IconLogout01Icon_exports = {};
__export(IconLogout01Icon_exports, {
  default: () => IconLogout01Icon_default
});
module.exports = __toCommonJS(IconLogout01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconLogout01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m16 17 5-5m0 0-5-5m5 5H9m3 5c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C9.395 21 8.93 21 8 21h-.5c-1.398 0-2.097 0-2.648-.228a3 3 0 0 1-1.624-1.624C3 18.597 3 17.898 3 16.5v-9c0-1.398 0-2.097.228-2.648a3 3 0 0 1 1.624-1.624C5.403 3 6.102 3 7.5 3H8c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C12 5.605 12 6.07 12 7" })
    }
  )
);
IconLogout01Icon.displayName = "IconLogout01Icon";
var IconLogout01Icon_default = IconLogout01Icon;
