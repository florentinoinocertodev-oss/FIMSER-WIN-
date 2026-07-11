import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Button({ children, variant = "primary", onClick, disabled = false, className = "", ...rest }) {
  const vclass = variant === "ghost" ? "btn ghost" : variant === "icon" ? "btn icon" : "btn";
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      className: `${vclass} ${className}`,
      onClick,
      disabled,
      "aria-disabled": disabled,
      ...rest,
      children
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
export {
  Button as default
};
