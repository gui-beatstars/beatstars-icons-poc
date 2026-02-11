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
var BaseIconUser01Icon_exports = {};
__export(BaseIconUser01Icon_exports, {
  default: () => BaseIconUser01Icon_default
});
module.exports = __toCommonJS(BaseIconUser01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconUser01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 20c0-1.4 0-2.1.17-2.66a4 4 0 0 1 2.67-2.67c.57-.17 1.26-.17 2.66-.17H10m10.5-4.93 2.23.83.14.07v.06l-.14.07-2.24.83-.03.01-.02.02-.01.03-.83 2.24-.07.14h-.06l-.07-.14-.83-2.24-.01-.03-.02-.02-.03-.01-2.24-.83-.14-.07v-.06l.14-.07 2.24-.83.03-.01.02-.02.01-.03.83-2.24.07-.14h.06l.07.14.83 2.24.01.03.02.02zm-5.02 7.45 2.96 1.1q.13.04.14.06.02.04 0 .07-.01.02-.14.07l-2.96 1.1h-.04l-.01.02-.02.04-1.1 2.96q-.04.13-.06.14h-.07q-.02-.01-.07-.14l-1.1-2.96v-.04l-.02-.01-.04-.02-2.96-1.1q-.13-.04-.14-.06v-.07q.01-.02.14-.06l2.96-1.1L13 17h0l.02-.04 1.1-2.96q.04-.13.06-.14h.07q.02.01.06.14l1.1 2.96.02.04.01.01zM13.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" })
    }
  )
);
BaseIconUser01Icon.displayName = "BaseIconUser01Icon";
var BaseIconUser01Icon_default = BaseIconUser01Icon;
