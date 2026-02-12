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
var IconStore01Icon_exports = {};
__export(IconStore01Icon_exports, {
  default: () => IconStore01Icon_default
});
module.exports = __toCommonJS(IconStore01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconStore01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.5 12v8m15-8v8M2 20.5h20m-8-.5v-3.333c0-.92-.896-1.667-2-1.667s-2 .746-2 1.667V20m-5.7-8c-1.697-.014-2.804-1.959-2.068-3.636l1.715-3.907C4.337 3.566 5.16 3 6.062 3h11.875c.902 0 1.724.566 2.115 1.457l1.716 3.907c.736 1.677-.37 3.622-2.069 3.636-1.417 0-2.565-1.12-2.565-2.503v-.055A2.56 2.56 0 0 1 14.568 12a2.56 2.56 0 0 1-2.566-2.558A2.56 2.56 0 0 1 9.436 12 2.56 2.56 0 0 1 6.87 9.442v.055C6.867 10.88 5.718 12 4.3 12" })
    }
  )
);
IconStore01Icon.displayName = "IconStore01Icon";
var IconStore01Icon_default = IconStore01Icon;
