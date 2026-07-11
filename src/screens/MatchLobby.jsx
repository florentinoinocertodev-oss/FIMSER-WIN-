import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useVisualState } from "../network/visualState.jsx";
function MatchLobby() {
  const { state } = useVisualState();
  return /* @__PURE__ */ jsxDEV("div", { style: { padding: 16 }, children: /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 16 }, children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "Match Lobby" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "small", children: "Match players and readiness (driven by backend VisualState)" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("pre", { style: { marginTop: 8, maxHeight: 220, overflow: "auto" }, children: JSON.stringify(state.visual?.lobby || {}, null, 2) }, void 0, false, {
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
  MatchLobby as default
};
