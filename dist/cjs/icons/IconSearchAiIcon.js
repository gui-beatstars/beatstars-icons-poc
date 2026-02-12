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
var IconSearchAiIcon_exports = {};
__export(IconSearchAiIcon_exports, {
  default: () => IconSearchAiIcon_default
});
module.exports = __toCommonJS(IconSearchAiIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconSearchAiIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m21 21-4.343-4.343m0 0-.007-.007m.007.007A8 8 0 0 0 11 3m5.657 13.657A8 8 0 0 1 3 11m1.59-3.354.266 1.064.266-1.064a3.47 3.47 0 0 1 2.524-2.525l1.065-.266-1.065-.266a3.47 3.47 0 0 1-2.524-2.525L4.856 1l-.267 1.064a3.47 3.47 0 0 1-2.525 2.525L1 4.855l1.064.266A3.47 3.47 0 0 1 4.59 7.646M9.9 12.48l.46 1.38.459-1.38a2.63 2.63 0 0 1 1.66-1.66l1.38-.46-1.38-.46a2.63 2.63 0 0 1-1.66-1.66l-.46-1.38-.46 1.38A2.63 2.63 0 0 1 8.24 9.9l-1.38.46 1.38.46a2.62 2.62 0 0 1 1.66 1.66" })
    }
  )
);
IconSearchAiIcon.displayName = "IconSearchAiIcon";
var IconSearchAiIcon_default = IconSearchAiIcon;
