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
var BaseIconCanvaIcon_exports = {};
__export(BaseIconCanvaIcon_exports, {
  default: () => BaseIconCanvaIcon_default
});
module.exports = __toCommonJS(BaseIconCanvaIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconCanvaIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeWidth: "2", d: "m19.34 17.3.22-.34.2-.32a1.2 1.2 0 0 0 .21-.98 1 1 0 0 0-.3-.47 1 1 0 0 0-.53-.2.8.8 0 0 0-.76.44l-.2.33-.02.03-.16.25a7.2 7.2 0 0 1-3.33 2.88q-1.17.59-2.47.6c-2.19 0-3.57-1.64-4.21-3.29a7 7 0 0 1-.47-2.19 12.8 12.8 0 0 1 2.64-8.17c1.05-1.32 2.22-2.08 3.2-2.09a1.7 1.7 0 0 1 1.35.73c.52.8.7 1.5.1 2.78a.85.85 0 0 0 .32 1.05l.06.04q.21.1.45.08.2-.02.4-.14.43-.23.91-.9c.7-.97.74-2.5.1-3.47A4.8 4.8 0 0 0 13.03 2a6.6 6.6 0 0 0-3.35.95c-4.08 2.5-6.46 8.2-5.45 12.87l.17.65c.47 1.58 1.4 3 2.6 3.92A7.7 7.7 0 0 0 11.4 22h.02c2.17 0 3.8-.9 4.86-1.57a11 11 0 0 0 3.06-3.13Z", clipRule: "evenodd" })
    }
  )
);
BaseIconCanvaIcon.displayName = "BaseIconCanvaIcon";
var BaseIconCanvaIcon_default = BaseIconCanvaIcon;
