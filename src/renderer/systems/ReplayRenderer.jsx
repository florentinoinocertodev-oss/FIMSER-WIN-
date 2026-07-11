import React from "react";
import ReplayViewer from "../../components/replay/ReplayViewer.jsx";
function ReplayRenderer({ visual = {} }) {
  const replay = visual.ui?.replay ?? null;
  return /* @__PURE__ */ React.createElement(ReplayViewer, { replay }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}
export {
  ReplayRenderer as default
};
