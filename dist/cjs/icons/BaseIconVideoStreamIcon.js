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
var BaseIconVideoStreamIcon_exports = {};
__export(BaseIconVideoStreamIcon_exports, {
  default: () => BaseIconVideoStreamIcon_default
});
module.exports = __toCommonJS(BaseIconVideoStreamIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconVideoStreamIcon = (0, import_react.forwardRef)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21.581 7.2a2.53 2.53 0 0 0-1.763-1.818C18.254 5 12 5 12 5s-6.254 0-7.818.418A2.53 2.53 0 0 0 2.42 7.236a26.4 26.4 0 0 0-.42 4.81c-.01 1.624.13 3.246.418 4.844a2.53 2.53 0 0 0 1.763 1.746c1.564.418 7.818.418 7.818.418s6.254 0 7.818-.418a2.53 2.53 0 0 0 1.763-1.818c.284-1.575.424-3.173.419-4.773A26.4 26.4 0 0 0 21.58 7.2" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.75 9.465c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l3.942 2.535c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-3.942 2.535c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848z" })
      ]
    }
  )
);
BaseIconVideoStreamIcon.displayName = "BaseIconVideoStreamIcon";
var BaseIconVideoStreamIcon_default = BaseIconVideoStreamIcon;
