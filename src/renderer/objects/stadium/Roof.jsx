import React from "react";
function Roof() {
  return /* @__PURE__ */ React.createElement("group", { name: "Stadium_Roof", children: [
    /* @__PURE__ */ React.createElement("mesh", { position: [0, 30, 0], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [200, 3, 120] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#0b0b0c", roughness: 0.5 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    [-1, 1].map((s, i) => /* @__PURE__ */ React.createElement("mesh", { position: [s * 60, 26, 0], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [4, 12, 4] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#0a0a0a" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, i, true, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  Roof as default
};
