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
var BaseIconHammer01Icon_exports = {};
__export(BaseIconHammer01Icon_exports, {
  default: () => BaseIconHammer01Icon_default
});
module.exports = __toCommonJS(BaseIconHammer01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconHammer01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21.004 21.004h-10.59m-.79-11.518-5.927 5.015a1.987 1.987 0 1 0 2.755 2.852l5.236-5.766m3.422-4.289 2.2 1.756a1.836 1.836 0 0 1 .157 2.727l-1.677 1.685a1.814 1.814 0 0 1-2.701-.143l-1.777-2.207a9.2 9.2 0 0 0-1.42-1.417L7.69 7.943a1.836 1.836 0 0 1-.156-2.727l1.674-1.683a1.815 1.815 0 0 1 2.701.143l1.779 2.206c.42.523.897.998 1.422 1.416" })
    }
  )
);
BaseIconHammer01Icon.displayName = "BaseIconHammer01Icon";
var BaseIconHammer01Icon_default = BaseIconHammer01Icon;
