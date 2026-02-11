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
var BaseIconBagNoteIcon_exports = {};
__export(BaseIconBagNoteIcon_exports, {
  default: () => BaseIconBagNoteIcon_default
});
module.exports = __toCommonJS(BaseIconBagNoteIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconBagNoteIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14.26 6.98H9.8m4.46 0c2.99 0 4.64 1.83 5.67 4.6l.38 1c1.7 4.57.3 9.42-4.66 9.42H8.38c-5.05 0-6.46-5-4.59-9.61l.41-1c1.08-2.67 2.7-4.41 5.6-4.41m4.46 0 2.43-4.5c-1.29-.96-3.19-.3-4.6.43-.66.34-1.4.5-2.14.38l-1.92-.32 1.77 4M12 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 0V10c1.33 0 3 1.5 3 3" })
    }
  )
);
BaseIconBagNoteIcon.displayName = "BaseIconBagNoteIcon";
var BaseIconBagNoteIcon_default = BaseIconBagNoteIcon;
