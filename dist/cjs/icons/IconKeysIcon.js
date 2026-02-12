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
var IconKeysIcon_exports = {};
__export(IconKeysIcon_exports, {
  default: () => IconKeysIcon_default
});
module.exports = __toCommonJS(IconKeysIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconKeysIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m11.559 10.355.323 1.206.941 3.512 1.294 4.83c.26.97-.394 1.988-1.46 2.274-1.068.286-2.143-.269-2.403-1.239m1.305-10.583-.736-2.746m.736 2.746q.436-.234.936-.37c2.134-.572 4.285.537 4.805 2.477.65 2.425-.986 4.97-3.653 5.685S8.297 17.5 7.64 15.05c-.148-.55-.912-3.401 3.182-7.44m0 0-.94-3.513c-.26-.97.394-1.988 1.46-2.274 1.067-.286 2.143.269 2.403 1.239.565 2.107-1.792 3.617-2.923 4.547" })
    }
  )
);
IconKeysIcon.displayName = "IconKeysIcon";
var IconKeysIcon_default = IconKeysIcon;
