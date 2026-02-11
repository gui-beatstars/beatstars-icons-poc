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
var BaseIconStore01Icon_exports = {};
__export(BaseIconStore01Icon_exports, {
  default: () => BaseIconStore01Icon_default
});
module.exports = __toCommonJS(BaseIconStore01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconStore01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.5 12v8m15-8v8M2 20.5h20m-8-.5v-3.33c0-.92-.9-1.67-2-1.67s-2 .75-2 1.67V20m-5.7-8c-1.7-.01-2.8-1.96-2.07-3.64l1.72-3.9A2.3 2.3 0 0 1 6.06 3h11.88c.9 0 1.72.57 2.11 1.46l1.72 3.9C22.5 10.04 21.4 12 19.7 12a2.53 2.53 0 0 1-2.57-2.5v-.06a2.56 2.56 0 0 1-5.13 0 2.56 2.56 0 0 1-5.13 0v.06c0 1.38-1.15 2.5-2.57 2.5" })
    }
  )
);
BaseIconStore01Icon.displayName = "BaseIconStore01Icon";
var BaseIconStore01Icon_default = BaseIconStore01Icon;
