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
var BaseIconPlayerPauseIcon_exports = {};
__export(BaseIconPlayerPauseIcon_exports, {
  default: () => BaseIconPlayerPauseIcon_default
});
module.exports = __toCommonJS(BaseIconPlayerPauseIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconPlayerPauseIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.52 3h4.12c.21 0 .29.02.37.06q.1.06.18.17c.04.07.06.15.06.35v16.84c0 .2-.02.28-.06.35a.4.4 0 0 1-.18.17c-.08.04-.16.06-.37.06H5.6c-.21 0-.29-.02-.37-.06a.4.4 0 0 1-.18-.17l-.06-.26V3.58c0-.2.02-.28.06-.35q.07-.1.18-.17A1 1 0 0 1 5.52 3m8.75 0h4.12c.21 0 .29.02.37.06q.1.06.18.17c.04.07.06.15.06.35v16.84c0 .2-.02.28-.06.35a.4.4 0 0 1-.18.17c-.08.04-.16.06-.37.06h-4.03c-.21 0-.29-.02-.37-.06a.4.4 0 0 1-.18-.17l-.06-.26V3.58c0-.2.02-.28.06-.35q.07-.1.18-.17a1 1 0 0 1 .28-.06", clipRule: "evenodd" })
    }
  )
);
BaseIconPlayerPauseIcon.displayName = "BaseIconPlayerPauseIcon";
var BaseIconPlayerPauseIcon_default = BaseIconPlayerPauseIcon;
