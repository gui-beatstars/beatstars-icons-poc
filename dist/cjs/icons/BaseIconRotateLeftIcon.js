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
var BaseIconRotateLeftIcon_exports = {};
__export(BaseIconRotateLeftIcon_exports, {
  default: () => BaseIconRotateLeftIcon_default
});
module.exports = __toCommonJS(BaseIconRotateLeftIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconRotateLeftIcon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      className,
      style,
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M5 9.2a1 1 0 0 0-2 0zm.092 11.582.454-.891zm-.874-.874.891-.454zm15.564 0-.891-.454zm-.874.874-.454-.891zM16.8 6V5zm2.108.218-.454.891zm.874.874-.891.454zM11 6l-.707-.707a1 1 0 0 0 0 1.414zm3.707-2.293a1 1 0 0 0-1.414-1.414L14 3zm-1.414 6a1 1 0 0 0 1.414-1.414L14 9zM20 9.2h-1v8.6h2V9.2zM16.8 21v-1H7.2v2h9.6zM4 17.8h1V9.2H3v8.6zM7.2 21v-1c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085l-.454.891-.454.891c.378.193.772.264 1.167.296.384.032.851.031 1.395.031zM4 17.8H3c0 .544 0 1.011.03 1.395.033.395.104.789.297 1.167l.891-.454.891-.454c-.025-.05-.063-.15-.085-.422C5 18.75 5 18.377 5 17.8zm1.092 2.982.454-.891a1 1 0 0 1-.437-.437l-.891.454-.891.454a3 3 0 0 0 1.311 1.311zM20 17.8h-1c0 .577 0 .949-.024 1.232-.022.272-.06.372-.085.422l.891.454.891.454c.193-.378.264-.772.296-1.167.032-.384.031-.851.031-1.395zM16.8 21v1c.544 0 1.011 0 1.395-.03.395-.033.789-.104 1.167-.297l-.454-.891-.454-.891c-.05.025-.15.063-.422.085C17.75 20 17.377 20 16.8 20zm2.982-1.092-.891-.454a1 1 0 0 1-.437.437l.454.891.454.891a3 3 0 0 0 1.311-1.311zM16.8 6v1c.577 0 .949 0 1.232.024.272.022.372.06.422.085l.454-.891.454-.891c-.378-.193-.772-.264-1.167-.296C17.811 4.999 17.344 5 16.8 5zM20 9.2h1c0-.544 0-1.011-.03-1.395-.033-.395-.104-.789-.297-1.167l-.891.454-.891.454c.025.05.063.15.085.422C19 8.25 19 8.623 19 9.2zm-1.092-2.982-.454.891a1 1 0 0 1 .437.437l.891-.454.891-.454a3 3 0 0 0-1.311-1.311zM16.8 6V5H11v2h5.8zM14 3l-.707-.707-3 3L11 6l.707.707 3-3zm-3 3-.707.707 3 3L14 9l.707-.707-3-3z" })
    }
  )
);
BaseIconRotateLeftIcon.displayName = "BaseIconRotateLeftIcon";
var BaseIconRotateLeftIcon_default = BaseIconRotateLeftIcon;
