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
var BaseIconPixIcon_exports = {};
__export(BaseIconPixIcon_exports, {
  default: () => BaseIconPixIcon_default
});
module.exports = __toCommonJS(BaseIconPixIcon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const BaseIconPixIcon = (0, import_react.forwardRef)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeWidth: "2", d: "M8.024 5.247c.57 0 1.104.209 1.507.594l2.182 2.08a.415.415 0 0 0 .57 0l2.181-2.072a2.17 2.17 0 0 1 1.507-.594c.097 0 .146-.112.077-.177l-2.582-2.464a2.287 2.287 0 0 0-3.12 0l-2.45 2.337c-.114.109-.034.296.128.296Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeWidth: "2", d: "M8.024 18.753c.57 0 1.104-.209 1.507-.594l2.182-2.08a.416.416 0 0 1 .57 0l2.181 2.072c.403.385.938.594 1.507.594.097 0 .146.112.077.177l-2.582 2.464c-.859.819-2.26.819-3.12 0l-2.45-2.337c-.114-.109-.034-.296.128-.296Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "currentColor", strokeWidth: "2", d: "M21.217 10.26 19.29 8.492c-.066-.061-.167-.073-.26-.073h-2.188c-.48 0-.95.176-1.28.49l-2.644 2.43a1.34 1.34 0 0 1-.896.343c-.331 0-.651-.118-.896-.343L8.47 8.898a1.9 1.9 0 0 0-1.28-.49H4.97c-.086 0-.18.009-.242.066l-1.944 1.787c-1.045.96-1.045 2.528 0 3.488l1.933 1.777c.062.057.156.066.242.066H7.18c.48 0 .949-.176 1.279-.49l2.655-2.44c.48-.441 1.322-.441 1.801 0l2.645 2.43c.34.313.81.49 1.279.49h2.189c.093 0 .192-.01.26-.073l1.925-1.77c1.048-.96 1.048-2.518.003-3.478Z" })
      ]
    }
  )
);
BaseIconPixIcon.displayName = "BaseIconPixIcon";
var BaseIconPixIcon_default = BaseIconPixIcon;
