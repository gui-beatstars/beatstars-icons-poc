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
var BaseIconExclusiveTagIcon_exports = {};
__export(BaseIconExclusiveTagIcon_exports, {
  default: () => BaseIconExclusiveTagIcon_default
});
module.exports = __toCommonJS(BaseIconExclusiveTagIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconExclusiveTagIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.67 14.65V9.42c0-.22 0-.32.04-.41l.16-.2q.09-.06.4-.1l3.9-.66c.29-.05.43-.07.54-.03q.15.05.23.2c.06.1.06.25.06.54v5m-5.33.9c0 .74-.6 1.34-1.34 1.34C7.6 16 7 15.4 7 14.65c0-.74.6-1.35 1.33-1.35s1.34.6 1.34 1.35m5.33-.9c0 .74-.6 1.34-1.33 1.34s-1.34-.6-1.34-1.35a1.34 1.34 0 1 1 2.67 0M7.33 3.81c.8-.07 1.57-.38 2.18-.9a3.8 3.8 0 0 1 4.98 0c.6.52 1.37.83 2.18.9a3.8 3.8 0 0 1 3.51 3.51c.07.8.38 1.57.9 2.18a3.8 3.8 0 0 1 0 4.98 4 4 0 0 0-.9 2.18 3.8 3.8 0 0 1-3.51 3.51c-.8.07-1.57.38-2.18.9a3.8 3.8 0 0 1-4.98 0 4 4 0 0 0-2.18-.9 3.8 3.8 0 0 1-3.51-3.51 4 4 0 0 0-.9-2.18 3.8 3.8 0 0 1 0-4.98c.52-.6.83-1.37.9-2.18a3.8 3.8 0 0 1 3.51-3.51" })
    }
  )
);
BaseIconExclusiveTagIcon.displayName = "BaseIconExclusiveTagIcon";
var BaseIconExclusiveTagIcon_default = BaseIconExclusiveTagIcon;
