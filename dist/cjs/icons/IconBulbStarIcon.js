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
var IconBulbStarIcon_exports = {};
__export(IconBulbStarIcon_exports, {
  default: () => IconBulbStarIcon_default
});
module.exports = __toCommonJS(IconBulbStarIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconBulbStarIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18.931 11.865a7.5 7.5 0 0 1-3.173 3.627c-.85.493-1.508 1.333-1.508 2.316V19h-4.5v-1.192c0-.983-.659-1.823-1.509-2.316a7.5 7.5 0 0 1 3.758-13.99M9.75 22.5h4.5m3.16-14.854-.265 1.064-.267-1.064a3.47 3.47 0 0 0-2.524-2.525l-1.065-.266 1.065-.266a3.47 3.47 0 0 0 2.524-2.525L17.145 1l.266 1.064a3.47 3.47 0 0 0 2.525 2.525L21 4.855l-1.064.266a3.47 3.47 0 0 0-2.525 2.525M12.1 12.48l-.46 1.38-.459-1.38a2.62 2.62 0 0 0-1.66-1.66l-1.38-.46 1.38-.46a2.63 2.63 0 0 0 1.66-1.66l.46-1.38.46 1.38a2.62 2.62 0 0 0 1.66 1.66l1.38.46-1.38.46a2.62 2.62 0 0 0-1.66 1.66" })
    }
  )
);
IconBulbStarIcon.displayName = "IconBulbStarIcon";
var IconBulbStarIcon_default = IconBulbStarIcon;
