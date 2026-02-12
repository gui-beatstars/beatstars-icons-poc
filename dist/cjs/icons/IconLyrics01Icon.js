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
var IconLyrics01Icon_exports = {};
__export(IconLyrics01Icon_exports, {
  default: () => IconLyrics01Icon_default
});
module.exports = __toCommonJS(IconLyrics01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconLyrics01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m21 18.897-1 1.15c-.53.61-1.25.953-2 .953s-1.47-.343-2-.953c-.53-.608-1.25-.95-2-.95s-1.469.342-2 .95M3 21h1.675c.489 0 .733 0 .963-.058q.309-.079.579-.252c.201-.13.374-.312.72-.675L19.5 6.807a2.31 2.31 0 0 0 0-3.154 2.05 2.05 0 0 0-3 0L3.937 16.861c-.346.363-.519.545-.642.757q-.165.285-.24.608C3 18.468 3 18.726 3 19.24z" })
    }
  )
);
IconLyrics01Icon.displayName = "IconLyrics01Icon";
var IconLyrics01Icon_default = IconLyrics01Icon;
