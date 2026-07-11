import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import RendererRoot from "../../renderer/RendererRoot.jsx";
import HUD from "./HUD.jsx";
import { useVisualState } from "../../network/visualState.jsx";
function MatchLayout({ matchId }) {
  const { state } = useVisualState();
  return /* @__PURE__ */ jsxDEV("div", { style: { height: "100vh", width: "100%", position: "relative" }, children: [
    /* @__PURE__ */ jsxDEV(RendererRoot, { visual: state.visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(HUD, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { position: "absolute", left: 12, bottom: 12 }, children: /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 8 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "small", children: [
        "Match: ",
        matchId
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "small", children: [
        "Last update: ",
        new Date(state.lastUpdate).toLocaleTimeString()
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  MatchLayout as default
};
