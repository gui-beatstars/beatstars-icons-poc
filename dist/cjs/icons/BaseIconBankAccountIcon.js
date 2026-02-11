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
var BaseIconBankAccountIcon_exports = {};
__export(BaseIconBankAccountIcon_exports, {
  default: () => BaseIconBankAccountIcon_default
});
module.exports = __toCommonJS(BaseIconBankAccountIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconBankAccountIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 9v8m4.5-8v8m5-8v8M19 9v8M3 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h14.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 17 19.96 17 19.4 17H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 17.76 3 18.04 3 18.6m8.653-15.523-7.4 1.645c-.447.099-.67.149-.838.269a1 1 0 0 0-.334.417C3 5.597 3 5.826 3 6.283V7.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 9 4.04 9 4.6 9h14.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 8.24 21 7.96 21 7.4V6.283c0-.457 0-.686-.081-.875a1 1 0 0 0-.335-.417c-.166-.12-.39-.17-.837-.27l-7.4-1.644a2 2 0 0 0-.26-.049 1 1 0 0 0-.174 0c-.066.006-.13.02-.26.05" })
    }
  )
);
BaseIconBankAccountIcon.displayName = "BaseIconBankAccountIcon";
var BaseIconBankAccountIcon_default = BaseIconBankAccountIcon;
