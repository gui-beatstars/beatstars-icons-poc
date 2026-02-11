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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14.257 6.98H9.803m4.454 0c2.992 0 4.647 1.835 5.677 4.596l.373 1.001c1.707 4.575.3 9.423-4.658 9.423H8.377c-5.045 0-6.457-5.009-4.584-9.613l.408-1.001c1.083-2.662 2.686-4.407 5.602-4.407m4.454 0 2.434-4.506c-1.288-.95-3.19-.295-4.601.434-.66.34-1.408.5-2.143.38l-1.915-.313 1.771 4.005M12 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 0V10c1.333 0 3 1.5 3 3" })
    }
  )
);
BaseIconBagNoteIcon.displayName = "BaseIconBagNoteIcon";
var BaseIconBagNoteIcon_default = BaseIconBagNoteIcon;
