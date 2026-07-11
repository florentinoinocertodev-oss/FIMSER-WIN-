import React from "react";
import { useVisualState } from "../network/visualState.jsx";
function Statistics() {
  const { state } = useVisualState();
  return /* @__PURE__ */ React.createElement("div", { style: { padding: 16 }, children: /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 16 }, children: [
    /* @__PURE__ */ React.createElement("h3", { children: "Statistics" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ React.createElement("div", { className: "small", children: "Backend-driven stats snapshot" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ React.createElement("pre", { style: { marginTop: 8, maxHeight: 240, overflow: "auto" }, children: JSON.stringify(state.visual?.match || {}, null, 2) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  Statistics as default
};
