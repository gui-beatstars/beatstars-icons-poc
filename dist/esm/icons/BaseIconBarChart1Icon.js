import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const BaseIconBarChart1Icon = forwardRef(
  ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 7H4.6c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.45C3 7.76 3 8.04 3 8.6v10.8c0 .56 0 .84.1 1.05a1 1 0 0 0 .45.44c.21.11.49.11 1.05.11H9m0 0h6m-6 0V4.6c0-.56 0-.84.1-1.05a1 1 0 0 1 .45-.44C9.76 3 10.04 3 10.6 3h2.8c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.45c.11.21.11.49.11 1.05V21m0-10h4.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.45c.11.21.11.49.11 1.05v6.8c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11H15" })
    }
  )
);
BaseIconBarChart1Icon.displayName = "BaseIconBarChart1Icon";
var BaseIconBarChart1Icon_default = BaseIconBarChart1Icon;
export {
  BaseIconBarChart1Icon_default as default
};
