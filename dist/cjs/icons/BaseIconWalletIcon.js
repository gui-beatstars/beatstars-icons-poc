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
var BaseIconWalletIcon_exports = {};
__export(BaseIconWalletIcon_exports, {
  default: () => BaseIconWalletIcon_default
});
module.exports = __toCommonJS(BaseIconWalletIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconWalletIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 8V4.5c0-.83 0-1.25-.18-1.5a1 1 0 0 0-.65-.42c-.3-.06-.69.12-1.44.47l-8.87 4.1a5 5 0 0 0-1.26.7 2 2 0 0 0-.48.76C3 8.93 3 9.31 3 10.05V15m13.5-.5h.01M3 11.2v6.6c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22h11.6c1.12 0 1.68 0 2.1-.22a2 2 0 0 0 .88-.87c.22-.43.22-.99.22-2.11v-6.6c0-1.12 0-1.68-.22-2.1a2 2 0 0 0-.87-.88C19.48 8 18.92 8 17.8 8H6.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C3 9.52 3 10.08 3 11.2m14 3.3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" })
    }
  )
);
BaseIconWalletIcon.displayName = "BaseIconWalletIcon";
var BaseIconWalletIcon_default = BaseIconWalletIcon;
