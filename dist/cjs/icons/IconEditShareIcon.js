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
var IconEditShareIcon_exports = {};
__export(IconEditShareIcon_exports, {
  default: () => IconEditShareIcon_default
});
module.exports = __toCommonJS(IconEditShareIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconEditShareIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.75 15.75h.008m4.492 4.5h.008M21 15l-6 6m1.125-5.25a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m4.5 4.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0M3 20h1.675c.489 0 .733 0 .963-.055q.309-.075.579-.24c.201-.123.374-.296.72-.642L19.5 6.5a2.121 2.121 0 1 0-3-3L3.937 16.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.578c-.055.23-.055.475-.055.965z" })
    }
  )
);
IconEditShareIcon.displayName = "IconEditShareIcon";
var IconEditShareIcon_default = IconEditShareIcon;
