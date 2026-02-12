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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.642 18.35H6.97c-2.607 0-4.72-2.046-4.72-4.572 0-2.381 1.88-4.337 4.28-4.553.49-2.893 3.084-5.1 6.21-5.1 2.19 0 4.117 1.083 5.245 2.725m3.765 3.88-3.372-1.143v8.002m-.658-1.617c.878.893.878 2.34 0 3.233a2.22 2.22 0 0 1-3.18 0 2.314 2.314 0 0 1 0-3.233 2.22 2.22 0 0 1 3.18 0" })
    }
  )
);
IconCloudStorateIcon.displayName = "IconCloudStorateIcon";
var IconCloudStorateIcon_default = IconCloudStorateIcon;
