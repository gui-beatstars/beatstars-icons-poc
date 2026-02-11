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
var BaseIconHourglass01Icon_exports = {};
__export(BaseIconHourglass01Icon_exports, {
  default: () => BaseIconHourglass01Icon_default
});
module.exports = __toCommonJS(BaseIconHourglass01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconHourglass01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 12 7.73 8.44a6 6 0 0 1-1.18-1.12 3 3 0 0 1-.45-.95C6 6 6 5.57 6 4.75V2m6 10 4.27-3.56c.64-.53.96-.8 1.18-1.12a3 3 0 0 0 .45-.95c.1-.38.1-.8.1-1.62V2m-6 10-4.27 3.56c-.64.53-.96.8-1.18 1.12a3 3 0 0 0-.45.95c-.1.38-.1.8-.1 1.62V22m6-10 4.27 3.56c.64.53.96.8 1.18 1.12q.3.43.45.95c.1.38.1.8.1 1.62V22M4 2h16M4 22h16" })
    }
  )
);
BaseIconHourglass01Icon.displayName = "BaseIconHourglass01Icon";
var BaseIconHourglass01Icon_default = BaseIconHourglass01Icon;
