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
var BaseIconShoppingBagRemoveIcon_exports = {};
__export(BaseIconShoppingBagRemoveIcon_exports, {
  default: () => BaseIconShoppingBagRemoveIcon_default
});
module.exports = __toCommonJS(BaseIconShoppingBagRemoveIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconShoppingBagRemoveIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 6h8M8 6c-1.3 0-2 .02-2.55.29a3 3 0 0 0-1.3 1.18c-.34.58-.41 1.35-.56 2.88l-.6 6.4c-.17 1.82-.25 2.73.05 3.43a3 3 0 0 0 1.32 1.45c.67.37 1.58.37 3.41.37H12M8 6v3m0-3a4 4 0 1 1 8 0m0 0c1.3 0 2 .02 2.55.29a3 3 0 0 1 1.3 1.18c.34.58.41 1.35.56 2.88l.3 3.2M16 6v3m-1 10h6" })
    }
  )
);
BaseIconShoppingBagRemoveIcon.displayName = "BaseIconShoppingBagRemoveIcon";
var BaseIconShoppingBagRemoveIcon_default = BaseIconShoppingBagRemoveIcon;
