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
var BaseIconPixIcon_exports = {};
__export(BaseIconPixIcon_exports, {
  default: () => BaseIconPixIcon_default
});
module.exports = __toCommonJS(BaseIconPixIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconPixIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeWidth: "2", d: "M8.02 5.25q.88 0 1.51.6l2.18 2.07c.16.15.41.15.57 0l2.18-2.07c.4-.39.94-.6 1.51-.6.1 0 .15-.1.08-.17L13.47 2.6a2.3 2.3 0 0 0-3.12 0L7.9 4.95c-.12.11-.04.3.12.3Zm0 13.5q.88 0 1.51-.6l2.18-2.07a.4.4 0 0 1 .57 0l2.18 2.07c.4.39.94.6 1.51.6.1 0 .15.1.08.17l-2.58 2.47a2.3 2.3 0 0 1-3.12 0L7.9 19.05a.17.17 0 0 1 .12-.3Zm13.2-8.49L19.29 8.5q-.12-.08-.26-.07h-2.19c-.48 0-.95.17-1.28.49l-2.64 2.43a1.34 1.34 0 0 1-1.8 0L8.48 8.9a2 2 0 0 0-1.28-.5H4.97q-.14 0-.24.07l-1.95 1.8a2.33 2.33 0 0 0 0 3.48l1.94 1.78q.1.07.24.06h2.22c.48 0 .95-.17 1.28-.49l2.65-2.44a1.4 1.4 0 0 1 1.8 0l2.65 2.43c.34.31.81.5 1.28.5h2.19q.16 0 .26-.08l1.92-1.77a2.32 2.32 0 0 0 0-3.48Z" })
    }
  )
);
BaseIconPixIcon.displayName = "BaseIconPixIcon";
var BaseIconPixIcon_default = BaseIconPixIcon;
