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
var BaseIconShoppingBag01Icon_exports = {};
__export(BaseIconShoppingBag01Icon_exports, {
  default: () => BaseIconShoppingBag01Icon_default
});
module.exports = __toCommonJS(BaseIconShoppingBag01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconShoppingBag01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 9V6a4 4 0 0 0-8 0v3m-4.4 1.35-.6 6.4c-.18 1.82-.26 2.73.04 3.43a3 3 0 0 0 1.32 1.45c.67.37 1.58.37 3.41.37h8.46c1.83 0 2.74 0 3.41-.37a3 3 0 0 0 1.32-1.45c.3-.7.22-1.6.05-3.43l-.6-6.4c-.15-1.53-.22-2.3-.56-2.88a3 3 0 0 0-1.3-1.18C17.95 6 17.18 6 15.64 6H8.37c-1.54 0-2.31 0-2.92.29a3 3 0 0 0-1.3 1.18c-.34.58-.41 1.35-.56 2.88" })
    }
  )
);
BaseIconShoppingBag01Icon.displayName = "BaseIconShoppingBag01Icon";
var BaseIconShoppingBag01Icon_default = BaseIconShoppingBag01Icon;
