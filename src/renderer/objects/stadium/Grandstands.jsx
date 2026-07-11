import React from "react";
function Stand({ pos, rot, width = 60, depth = 18, vip = false }) {
  return /* @__PURE__ */ React.createElement("group", { position: pos, "rotation-y": rot, children: [
    /* @__PURE__ */ React.createElement("mesh", { position: [0, depth / 2, 0], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [width, depth, 18] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: vip ? "#2b2b2b" : "#151515" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ React.createElement("mesh", { position: [0, 2 + i * 1.8, -6], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [width - i * 6, 1.2, 10 - i] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: i % 2 ? "#222" : "#111" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 21,
        columnNumber: 11
      }, this)
    ] }, i, true, {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function Grandstands({ mode = "day" }) {
  return /* @__PURE__ */ React.createElement("group", { name: "Grandstands", children: [
    /* @__PURE__ */ React.createElement(Stand, { pos: [0, 6, -58], rot: 0, width: 120, depth: 16, vip: true }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(Stand, { pos: [0, 6, 58], rot: Math.PI, width: 120, depth: 16 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(Stand, { pos: [-70, 6, 0], rot: Math.PI / 2, width: 80, depth: 16 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(Stand, { pos: [70, 6, 0], rot: -Math.PI / 2, width: 80, depth: 16 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
export {
  Grandstands as default
};
