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
var IconGitBox01Icon_exports = {};
__export(IconGitBox01Icon_exports, {
  default: () => IconGitBox01Icon_default
});
module.exports = __toCommonJS(IconGitBox01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconGitBox01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 6v16m0-16H8.465c-.521 0-1.021-.21-1.39-.586A2.02 2.02 0 0 1 6.5 4c0-.53.207-1.04.576-1.414A1.95 1.95 0 0 1 8.465 2C11.215 2 12 6 12 6m0 0h3.536c.52 0 1.02-.21 1.389-.586.368-.375.575-.884.575-1.414s-.207-1.04-.575-1.414A1.95 1.95 0 0 0 15.536 2C12.786 2 12 6 12 6m8 5v7.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 22 17.92 22 16.8 22H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 20.48 4 19.92 4 18.8V11M2 7.6v1.8c0 .56 0 .84.11 1.054a1 1 0 0 0 .436.437c.214.11.494.11 1.054.11h16.8c.56 0 .84 0 1.054-.11a1 1 0 0 0 .437-.437c.11-.214.11-.494.11-1.054V7.6c0-.56 0-.84-.11-1.054a1 1 0 0 0-.437-.437C21.24 6 20.96 6 20.4 6H3.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 6.76 2 7.04 2 7.6" })
    }
  )
);
IconGitBox01Icon.displayName = "IconGitBox01Icon";
var IconGitBox01Icon_default = IconGitBox01Icon;
