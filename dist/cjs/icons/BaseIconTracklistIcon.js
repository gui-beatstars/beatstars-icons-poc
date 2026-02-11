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
var BaseIconTracklistIcon_exports = {};
__export(BaseIconTracklistIcon_exports, {
  default: () => BaseIconTracklistIcon_default
});
module.exports = __toCommonJS(BaseIconTracklistIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconTracklistIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8.5 15h-5M14 19.151v-5.823c0-.409.249-.777.629-.928l4.5-1.4a1 1 0 0 1 1.371.928v6.223M11.5 10h-8m16-5h-16m10.061 13.439a1.5 1.5 0 1 1-2.12 2.121 1.5 1.5 0 0 1 2.12-2.121m6.5-1a1.5 1.5 0 1 1-2.12 2.121 1.5 1.5 0 0 1 2.12-2.121" })
    }
  )
);
BaseIconTracklistIcon.displayName = "BaseIconTracklistIcon";
var BaseIconTracklistIcon_default = BaseIconTracklistIcon;
