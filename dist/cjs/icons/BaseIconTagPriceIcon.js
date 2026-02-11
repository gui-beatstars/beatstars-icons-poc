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
var BaseIconTagPriceIcon_exports = {};
__export(BaseIconTagPriceIcon_exports, {
  default: () => BaseIconTagPriceIcon_default
});
module.exports = __toCommonJS(BaseIconTagPriceIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconTagPriceIcon = (0, import_react.forwardRef)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m10.66 10.68.58-.58a1.6 1.6 0 0 1 2.25-.05m-2.82.63-.5.49a1.7 1.7 0 0 0-.05 2.4 1.7 1.7 0 0 0 2.4-.05l.99-.99a1.7 1.7 0 0 1 2.4-.06 1.7 1.7 0 0 1-.06 2.4l-.5.5m-4.68-4.7-.7-.7m5.39 5.4-.58.57c-.63.64-1.63.66-2.24.06m2.82-.63.7.7M4.77 3.22l-1.6 1.6c-.34.35-.5.52-.63.72q-.16.26-.24.57c-.05.22-.05.47-.05.95v2.81c0 .48 0 .72.05.95q.07.3.24.57c.12.2.3.37.64.71l7.56 7.57c1.18 1.18 1.76 1.76 2.44 1.98q.92.3 1.83 0c.67-.22 1.26-.8 2.43-1.98l2.19-2.18c1.17-1.17 1.76-1.76 1.98-2.44a3 3 0 0 0 0-1.83c-.22-.67-.81-1.26-1.98-2.43l-7.57-7.57c-.34-.34-.51-.51-.71-.63q-.27-.17-.57-.24c-.23-.05-.47-.05-.96-.05h-2.8c-.49 0-.73 0-.96.05q-.3.07-.57.24c-.2.12-.37.29-.71.63m2.78 3.89a.5.5 0 1 1-.98 0 .5.5 0 0 1 .98 0" })
    }
  )
);
BaseIconTagPriceIcon.displayName = "BaseIconTagPriceIcon";
var BaseIconTagPriceIcon_default = BaseIconTagPriceIcon;
