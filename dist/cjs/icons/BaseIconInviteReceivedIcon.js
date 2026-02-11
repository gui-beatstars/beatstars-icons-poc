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
var BaseIconInviteReceivedIcon_exports = {};
__export(BaseIconInviteReceivedIcon_exports, {
  default: () => BaseIconInviteReceivedIcon_default
});
module.exports = __toCommonJS(BaseIconInviteReceivedIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconInviteReceivedIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 3.5v7m0 0L15.5 7M12 10.5 8.5 7M2 12h3.88c.69 0 1.31.39 1.62 1 .3.61.93 1 1.62 1h5.76a1.8 1.8 0 0 0 1.62-1c.3-.61.93-1 1.62-1H22M2 12V8.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C4.29 4 5.13 4 6.8 4M2 12v3.2c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33h10.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V12m0 0V8.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C19.71 4 18.87 4 17.2 4" })
    }
  )
);
BaseIconInviteReceivedIcon.displayName = "BaseIconInviteReceivedIcon";
var BaseIconInviteReceivedIcon_default = BaseIconInviteReceivedIcon;
