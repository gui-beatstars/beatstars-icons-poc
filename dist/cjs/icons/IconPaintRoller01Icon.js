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
var IconPaintRoller01Icon_exports = {};
__export(IconPaintRoller01Icon_exports, {
  default: () => IconPaintRoller01Icon_default
});
module.exports = __toCommonJS(IconPaintRoller01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconPaintRoller01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 4.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C17.197 7 16.965 7 16.5 7h-11c-.465 0-.697 0-.89-.038A2 2 0 0 1 3.038 5.39C3 5.197 3 4.965 3 4.5s0-.697.038-.89A2 2 0 0 1 4.61 2.038C4.803 2 5.035 2 5.5 2h11c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89m0 0c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 6.102 22 6.568 22 7.5v.3c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 11 19.92 11 18.8 11h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 12.52 12 13.08 12 14.2v.8m-.4 7h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 21.24 14 20.96 14 20.4v-3.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C13.24 15 12.96 15 12.4 15h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 15.76 10 16.04 10 16.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C10.76 22 11.04 22 11.6 22" })
    }
  )
);
IconPaintRoller01Icon.displayName = "IconPaintRoller01Icon";
var IconPaintRoller01Icon_default = IconPaintRoller01Icon;
