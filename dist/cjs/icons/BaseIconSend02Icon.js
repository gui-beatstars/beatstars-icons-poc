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
var BaseIconSend02Icon_exports = {};
__export(BaseIconSend02Icon_exports, {
  default: () => BaseIconSend02Icon_default
});
module.exports = __toCommonJS(BaseIconSend02Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconSend02Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m10.6 13.4 9.83-9.83m-9.7 10.13 2.45 6.33c.22.56.33.84.48.92q.22.1.43 0c.16-.08.27-.36.49-.92l6.16-15.8c.2-.5.3-.76.25-.92a.5.5 0 0 0-.3-.3c-.16-.05-.41.05-.91.25L3.97 9.42c-.56.22-.84.33-.92.49a.5.5 0 0 0 0 .43c.08.15.36.26.92.48l6.33 2.46.21.1.11.1z" })
    }
  )
);
BaseIconSend02Icon.displayName = "BaseIconSend02Icon";
var BaseIconSend02Icon_default = BaseIconSend02Icon;
