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
var BaseIconTranslate01Icon_exports = {};
__export(BaseIconTranslate01Icon_exports, {
  default: () => BaseIconTranslate01Icon_default
});
module.exports = __toCommonJS(BaseIconTranslate01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconTranslate01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12.913 17h7.174m-7.174 0L11 21m1.913-4 2.865-5.991c.231-.483.347-.724.505-.8a.5.5 0 0 1 .434 0c.158.076.274.317.505.8L20.087 17m0 0L22 21M2 5h6m0 0h3.5M8 5V3m3.5 2H14m-2.5 0c-.496 2.957-1.647 5.636-3.334 7.884M10 14a9.4 9.4 0 0 1-1.834-1.116m0 0C6.813 11.848 5.603 10.427 5 9m3.166 3.884A17.3 17.3 0 0 1 2 18" })
    }
  )
);
BaseIconTranslate01Icon.displayName = "BaseIconTranslate01Icon";
var BaseIconTranslate01Icon_default = BaseIconTranslate01Icon;
