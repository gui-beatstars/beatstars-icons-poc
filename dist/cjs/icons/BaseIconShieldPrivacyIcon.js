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
var BaseIconShieldPrivacyIcon_exports = {};
__export(BaseIconShieldPrivacyIcon_exports, {
  default: () => BaseIconShieldPrivacyIcon_default
});
module.exports = __toCommonJS(BaseIconShieldPrivacyIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconShieldPrivacyIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m9 11.5 2 2L15.5 9m4.5 3c0 4.9-5.35 8.48-7.3 9.61-.22.13-.33.2-.49.23a1 1 0 0 1-.42 0c-.16-.03-.27-.1-.49-.23C9.35 20.48 4 16.91 4 12V7.22c0-.8 0-1.2.13-1.55a2 2 0 0 1 .55-.78c.27-.25.65-.39 1.4-.67l5.36-2c.2-.09.31-.13.42-.14h.28c.11.01.21.05.42.13l5.36 2.01c.75.28 1.13.42 1.4.67a2 2 0 0 1 .55.78c.13.35.13.75.13 1.55z" })
    }
  )
);
BaseIconShieldPrivacyIcon.displayName = "BaseIconShieldPrivacyIcon";
var BaseIconShieldPrivacyIcon_default = BaseIconShieldPrivacyIcon;
