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
var BaseIconGitBox01Icon_exports = {};
__export(BaseIconGitBox01Icon_exports, {
  default: () => BaseIconGitBox01Icon_default
});
module.exports = __toCommonJS(BaseIconGitBox01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconGitBox01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.95", d: "M12 6v16m0-16H8.46a2 2 0 0 1-1.38-.59 2 2 0 0 1 0-2.82C7.44 2.2 7.94 2 8.46 2 11.21 2 12 6 12 6m0 0h3.54a2 2 0 0 0 1.38-.59 2 2 0 0 0 0-2.82A2 2 0 0 0 15.54 2C12.79 2 12 6 12 6m8 5v7.8c0 1.12 0 1.68-.22 2.1a2 2 0 0 1-.87.88c-.43.22-.99.22-2.11.22H7.2c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87C4 20.48 4 19.92 4 18.8V11M2 7.6v1.8c0 .56 0 .84.1 1.05a1 1 0 0 0 .45.44c.21.11.49.11 1.05.11h16.8c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.45c.11-.21.11-.49.11-1.05V7.6c0-.56 0-.84-.1-1.05a1 1 0 0 0-.45-.44C21.24 6 20.96 6 20.4 6H3.6c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.45C2 6.76 2 7.04 2 7.6" })
    }
  )
);
BaseIconGitBox01Icon.displayName = "BaseIconGitBox01Icon";
var BaseIconGitBox01Icon_default = BaseIconGitBox01Icon;
