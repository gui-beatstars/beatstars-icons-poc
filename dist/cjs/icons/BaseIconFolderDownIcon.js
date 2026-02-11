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
var BaseIconFolderDownIcon_exports = {};
__export(BaseIconFolderDownIcon_exports, {
  default: () => BaseIconFolderDownIcon_default
});
module.exports = __toCommonJS(BaseIconFolderDownIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconFolderDownIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m13 7-1.12-2.23c-.32-.64-.48-.96-.72-1.2a2 2 0 0 0-.74-.46C10.1 3 9.74 3 9.02 3H5.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C2 4.52 2 5.08 2 6.2V7m11 0H2m11 0h4.2c1.68 0 2.52 0 3.16.33a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v4.4c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H6.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C2 18.71 2 17.87 2 16.2V7m10.91 6h-1.82c-.97 0-1.45 0-1.68.2a.8.8 0 0 0-.28.66c.03.3.37.64 1.06 1.33l.9.9c.32.32.48.48.66.54a1 1 0 0 0 .5 0c.18-.06.34-.22.66-.54l.9-.9c.69-.69 1.03-1.03 1.06-1.33a.8.8 0 0 0-.28-.67c-.23-.19-.71-.19-1.68-.19" })
    }
  )
);
BaseIconFolderDownIcon.displayName = "BaseIconFolderDownIcon";
var BaseIconFolderDownIcon_default = BaseIconFolderDownIcon;
