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
var IconMessageAiIcon_exports = {};
__export(IconMessageAiIcon_exports, {
  default: () => IconMessageAiIcon_default
});
module.exports = __toCommonJS(IconMessageAiIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconMessageAiIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V14c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C5.605 18 6.07 18 7 18v2.335c0 .533 0 .8.11.937a.5.5 0 0 0 .39.188c.176 0 .384-.167.8-.5l2.385-1.908c.487-.39.731-.585 1.002-.724q.363-.184.762-.267c.299-.061.61-.061 1.235-.061H16.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2v-1.4m-1.904-3.954L18.83 8.91l-.267-1.064a3.47 3.47 0 0 0-2.524-2.525l-1.065-.266 1.065-.266a3.47 3.47 0 0 0 2.524-2.525L18.83 1.2l.266 1.064a3.47 3.47 0 0 0 2.525 2.525l1.064.266-1.064.266a3.47 3.47 0 0 0-2.525 2.525m-5.31 4.834-.46 1.38-.46-1.38a2.62 2.62 0 0 0-1.66-1.66l-1.38-.46 1.38-.46a2.63 2.63 0 0 0 1.66-1.66l.46-1.38.46 1.38a2.62 2.62 0 0 0 1.66 1.66l1.38.46-1.38.46a2.62 2.62 0 0 0-1.66 1.66" })
    }
  )
);
IconMessageAiIcon.displayName = "IconMessageAiIcon";
var IconMessageAiIcon_default = IconMessageAiIcon;
