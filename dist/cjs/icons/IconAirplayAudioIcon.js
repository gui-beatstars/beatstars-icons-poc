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
var IconAirplayAudioIcon_exports = {};
__export(IconAirplayAudioIcon_exports, {
  default: () => IconAirplayAudioIcon_default
});
module.exports = __toCommonJS(IconAirplayAudioIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconAirplayAudioIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.586 13.414a2 2 0 1 1 2.828 0m-5.657 2.829a6 6 0 1 1 8.486 0M4.929 19.07c-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0 3.905 10.237 0 14.142M9.03 21h5.942c.492 0 .737 0 .861-.097a.43.43 0 0 0 .168-.347c-.002-.154-.16-.337-.475-.703l-2.97-3.454c-.19-.221-.286-.332-.4-.372a.46.46 0 0 0-.31 0c-.114.04-.21.15-.4.372l-2.97 3.454c-.315.366-.473.549-.475.703a.43.43 0 0 0 .168.347c.124.097.37.097.861.097" })
    }
  )
);
IconAirplayAudioIcon.displayName = "IconAirplayAudioIcon";
var IconAirplayAudioIcon_default = IconAirplayAudioIcon;
