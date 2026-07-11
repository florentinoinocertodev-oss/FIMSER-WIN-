import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useVisualState } from "../../network/visualState.jsx";
function NetworkIndicator() {
  const { state } = useVisualState();
  return /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { position: "absolute", right: 12, bottom: 12, padding: 8 }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "small", children: [
      "Connected: ",
      state.connected ? "Yes" : "No"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "small", children: [
      "Latency: ",
      state.latency ?? "\u2014",
      " ms"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  NetworkIndicator as default
};
