import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useVisualState } from "../network/visualState.jsx";
function Notifications() {
  const { state } = useVisualState();
  const notes = state.visual?.ui?.notifications || [];
  return /* @__PURE__ */ jsxDEV("div", { style: { padding: 16 }, children: /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 16 }, children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "Notifications" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "small", children: "Backend-provided notifications" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 8 }, children: notes.length ? notes.map((n, i) => /* @__PURE__ */ jsxDEV("div", { className: "small", style: { padding: 8, borderBottom: "1px solid rgba(255,255,255,0.02)" }, children: n }, i, false, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 45
    }, this)) : /* @__PURE__ */ jsxDEV("div", { className: "small", children: "No notifications" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 158
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
export {
  Notifications as default
};
