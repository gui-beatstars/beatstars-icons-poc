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
var BaseIconListReorderIcon_exports = {};
__export(BaseIconListReorderIcon_exports, {
  default: () => BaseIconListReorderIcon_default
});
module.exports = __toCommonJS(BaseIconListReorderIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconListReorderIcon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      className,
      style,
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M19.88 7a1 1 0 1 0 0-2zM4 5a1 1 0 0 0 0 2zm8.92 8a1 1 0 1 0 0-2zM4 11a1 1 0 1 0 0 2zm15.88 8a1 1 0 1 0 0-2zM4 17a1 1 0 1 0 0 2zm15.41-1.95a1 1 0 0 0 1.18-1.62l-.59.81zM16.91 12l-.55-.84a1 1 0 0 0-.04 1.65zm3.63-1.16a1 1 0 1 0-1.08-1.68L20 10zM19.88 6V5H4v2h15.88zm-6.96 6v-1H4v2h8.92zm6.96 6v-1H4v2h15.88zm.12-3.76.59-.8-3.1-2.25-.59.81-.58.81 3.1 2.24zM16.9 12l.54.84 3.1-2L20 10l-.54-.84-3.1 2z" })
    }
  )
);
BaseIconListReorderIcon.displayName = "BaseIconListReorderIcon";
var BaseIconListReorderIcon_default = BaseIconListReorderIcon;
