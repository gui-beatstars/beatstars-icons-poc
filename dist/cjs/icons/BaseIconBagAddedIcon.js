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
var BaseIconBagAddedIcon_exports = {};
__export(BaseIconBagAddedIcon_exports, {
  default: () => BaseIconBagAddedIcon_default
});
module.exports = __toCommonJS(BaseIconBagAddedIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconBagAddedIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 6h8M8 6c-1.3.002-1.995.024-2.554.29a3 3 0 0 0-1.292 1.176c-.346.581-.418 1.35-.562 2.886l-.6 6.4c-.17 1.82-.256 2.73.046 3.432a3 3 0 0 0 1.32 1.45C5.03 22 5.944 22 7.771 22h4.23M8 6v3m0-3a4 4 0 1 1 8 0m0 0c1.3.002 1.994.024 2.554.29a3 3 0 0 1 1.292 1.176c.345.581.417 1.35.561 2.886l.3 3.2M16 6v3m-1 10.5 2 2 4.5-4.5" })
    }
  )
);
BaseIconBagAddedIcon.displayName = "BaseIconBagAddedIcon";
var BaseIconBagAddedIcon_default = BaseIconBagAddedIcon;
