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
var BaseIconGlobe01Icon_exports = {};
__export(BaseIconGlobe01Icon_exports, {
  default: () => BaseIconGlobe01Icon_default
});
module.exports = __toCommonJS(BaseIconGlobe01Icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconGlobe01Icon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m3.076 7.483 4.288 3.063c.223.159.335.239.451.257a.5.5 0 0 0 .301-.046c.106-.053.188-.163.353-.382l.906-1.208c.047-.063.07-.094.097-.12a.5.5 0 0 1 .08-.064c.032-.02.067-.036.138-.068l3.869-1.719c.16-.071.24-.107.3-.162a.5.5 0 0 0 .124-.177c.032-.076.037-.164.05-.339l.282-4.249M13.5 13.5l2.616 1.121c.303.13.455.195.536.303a.5.5 0 0 1 .098.33c-.009.134-.1.271-.284.546l-1.229 1.844c-.086.13-.13.195-.187.242a.5.5 0 0 1-.172.092c-.071.022-.15.022-.306.022h-1.995c-.208 0-.311 0-.4-.035a.5.5 0 0 1-.2-.144c-.061-.073-.094-.171-.16-.368l-.712-2.139a1 1 0 0 1-.063-.233.5.5 0 0 1 .01-.156c.014-.057.042-.112.096-.221l.542-1.083c.11-.22.165-.33.25-.399a.5.5 0 0 1 .26-.108c.108-.011.225.028.458.105zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" })
    }
  )
);
BaseIconGlobe01Icon.displayName = "BaseIconGlobe01Icon";
var BaseIconGlobe01Icon_default = BaseIconGlobe01Icon;
