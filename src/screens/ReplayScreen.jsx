import React from "react";
import ReplayViewer from "../components/replay/ReplayViewer.jsx";
import { useVisualState } from "../network/visualState.jsx";
function ReplayScreen() {
  const { state } = useVisualState();
  const replay = state.visual?.ui?.replay;
  return /* @__PURE__ */ React.createElement("div", { style: { height: "100vh" }, children: /* @__PURE__ */ React.createElement(ReplayViewer, { replay }, void 0, false, {
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
