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
var IconDiskCollectionIcon_exports = {};
__export(IconDiskCollectionIcon_exports, {
  default: () => IconDiskCollectionIcon_default
});
module.exports = __toCommonJS(IconDiskCollectionIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconDiskCollectionIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.817 2.5h12.366m-3.633 8.47a3.76 3.76 0 0 1 0 5.226 3.547 3.547 0 0 1-5.1 0 3.76 3.76 0 0 1 0-5.225 3.547 3.547 0 0 1 5.1 0m4.388-5.303H5.062c-1.193 0-2.137 1.033-2.057 2.251L3.76 19.53c.072 1.11.972 1.971 2.057 1.971h12.366c1.085 0 1.985-.861 2.057-1.97l.755-11.612c.08-1.218-.864-2.251-2.057-2.251" })
    }
  )
);
IconDiskCollectionIcon.displayName = "IconDiskCollectionIcon";
var IconDiskCollectionIcon_default = IconDiskCollectionIcon;
