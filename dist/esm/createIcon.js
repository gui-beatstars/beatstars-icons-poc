import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
function createIcon({
  displayName,
  viewBox = "0 0 24 24",
  path
}) {
  const Icon = forwardRef(
    ({ size = 24, color = "currentColor", strokeWidth, className, style, ...rest }, ref) => /* @__PURE__ */ jsx(
      "svg",
      {
        ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox,
        fill: "none",
        stroke: color,
        strokeWidth,
        className,
        style,
        ...rest,
        dangerouslySetInnerHTML: { __html: path }
      }
    )
  );
  Icon.displayName = displayName;
  return Icon;
}
export {
  createIcon
};
