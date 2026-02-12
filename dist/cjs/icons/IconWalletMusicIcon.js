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
var IconWalletMusicIcon_exports = {};
__export(IconWalletMusicIcon_exports, {
  default: () => IconWalletMusicIcon_default
});
module.exports = __toCommonJS(IconWalletMusicIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconWalletMusicIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13.863 9.815h2.966m-.734 10.594v-5.117c0-.434.268-.825.676-.984l3.757-1.485c.706-.279 1.472.234 1.472.984v5.542m-12.091-.741H8.333c-2.217 0-3.325 0-4.172-.426a3.93 3.93 0 0 1-1.73-1.708C2 15.638 2 14.544 2 12.355V3.954m0 0c0 1.079.885 1.954 1.977 1.954h11.481c2.217 0 3.325 0 4.172.426.745.374 1.35.972 1.73 1.707.185.36.29.766.351 1.286M2 3.954C2 2.874 2.885 2 3.977 2H16.83c1.092 0 1.977.875 1.977 1.954v1.954m-3.182 13.375a1.58 1.58 0 0 1 0 2.251 1.625 1.625 0 0 1-2.278 0 1.58 1.58 0 0 1 0-2.25 1.625 1.625 0 0 1 2.278 0m5.905-1.06a1.58 1.58 0 0 1 0 2.25 1.625 1.625 0 0 1-2.278 0 1.58 1.58 0 0 1 0-2.25 1.624 1.624 0 0 1 2.278 0" })
    }
  )
);
IconWalletMusicIcon.displayName = "IconWalletMusicIcon";
var IconWalletMusicIcon_default = IconWalletMusicIcon;
