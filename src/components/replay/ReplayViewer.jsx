import React from "react";
function ReplayViewer({ replay }) {
  if (!replay) return null;
  return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 12, top: 12 }, className: "glass", children: /* @__PURE__ */ React.createElement("div", { style: { padding: 8 }, children: [
    /* @__PURE__ */ React.createElement("div", { className: "small", children: "Replay Viewer" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ React.createElement("div", { className: "small", children: [
      "Frames: ",
      replay.frames?.length ?? 0
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
export {
  ReplayViewer as default
};
