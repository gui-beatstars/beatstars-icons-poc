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
var IconPlayerPauseIcon_exports = {};
__export(IconPlayerPauseIcon_exports, {
  default: () => IconPlayerPauseIcon_default
});
module.exports = __toCommonJS(IconPlayerPauseIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconPlayerPauseIcon = (0, import_react.forwardRef)(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.516 3.002 9.638 3c.213 0 .29.02.368.06q.118.06.18.17c.042.074.064.146.064.347v16.846c0 .2-.022.274-.064.347a.4.4 0 0 1-.18.17c-.078.04-.155.06-.368.06H5.612c-.213 0-.29-.02-.368-.06a.4.4 0 0 1-.18-.17.5.5 0 0 1-.062-.257L5 3.577c0-.2.022-.273.064-.347a.4.4 0 0 1 .18-.17.6.6 0 0 1 .272-.058", clipRule: "evenodd" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14.266 3.002 18.388 3c.213 0 .29.02.368.06q.118.06.18.17c.042.074.064.146.064.347v16.846c0 .2-.022.274-.064.347a.4.4 0 0 1-.18.17c-.078.04-.155.06-.368.06h-4.026c-.213 0-.29-.02-.368-.06a.4.4 0 0 1-.18-.17.5.5 0 0 1-.062-.257L13.75 3.577c0-.2.022-.273.064-.347a.4.4 0 0 1 .18-.17.6.6 0 0 1 .272-.058", clipRule: "evenodd" })
      ]
    }
  )
);
IconPlayerPauseIcon.displayName = "IconPlayerPauseIcon";
var IconPlayerPauseIcon_default = IconPlayerPauseIcon;
