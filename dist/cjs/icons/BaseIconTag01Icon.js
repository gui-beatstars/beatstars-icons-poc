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
var BaseIconTag01Icon_exports = {};
__export(BaseIconTag01Icon_exports, {
  default: () => BaseIconTag01Icon_default
});
module.exports = __toCommonJS(BaseIconTag01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconTag01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2 5.2v4.47c0 .5 0 .74.06.97q.07.3.23.58c.13.2.3.37.65.72l7.67 7.67c1.18 1.18 1.78 1.78 2.46 2a3 3 0 0 0 1.86 0c.68-.22 1.28-.82 2.46-2l2.22-2.22c1.18-1.18 1.78-1.78 2-2.46a3 3 0 0 0 0-1.86c-.22-.68-.82-1.28-2-2.46l-7.67-7.67a4 4 0 0 0-.72-.65 2 2 0 0 0-.58-.23C10.4 2 10.16 2 9.67 2H5.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C2 3.52 2 4.08 2 5.2M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" })
    }
  )
);
BaseIconTag01Icon.displayName = "BaseIconTag01Icon";
var BaseIconTag01Icon_default = BaseIconTag01Icon;
