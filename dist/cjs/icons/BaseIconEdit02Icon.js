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
var BaseIconEdit02Icon_exports = {};
__export(BaseIconEdit02Icon_exports, {
  default: () => BaseIconEdit02Icon_default
});
module.exports = __toCommonJS(BaseIconEdit02Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconEdit02Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.435 10.29 13.71 6.565M3 21l3.152-.35c.385-.043.577-.064.757-.123q.241-.077.452-.217c.158-.104.295-.24.569-.515L20.229 7.497a2.634 2.634 0 1 0-3.726-3.726l-12.298 12.3c-.274.273-.411.41-.515.568q-.14.211-.217.452c-.059.18-.08.372-.123.757z" })
    }
  )
);
BaseIconEdit02Icon.displayName = "BaseIconEdit02Icon";
var BaseIconEdit02Icon_default = BaseIconEdit02Icon;
