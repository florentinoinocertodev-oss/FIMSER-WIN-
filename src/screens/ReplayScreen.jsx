import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import ReplayViewer from "../components/replay/ReplayViewer.jsx";
import { useVisualState } from "../network/visualState.jsx";
function ReplayScreen() {
  const { state } = useVisualState();
  const replay = state.visual?.ui?.replay;
  return /* @__PURE__ */ jsxDEV("div", { style: { height: "100vh" }, children: /* @__PURE__ */ jsxDEV(ReplayViewer, { replay }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
export {
  ReplayScreen as default
};
