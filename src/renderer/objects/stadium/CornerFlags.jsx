import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function CornerFlags() {
  const positions = [
    [-58, 0.01, -38],
    [58, 0.01, -38],
    [-58, 0.01, 38],
    [58, 0.01, 38]
  ];
  return /* @__PURE__ */ jsxDEV("group", { name: "Corner_Flags", children: positions.map((p, i) => /* @__PURE__ */ jsxDEV("group", { position: p, children: [
    /* @__PURE__ */ jsxDEV("mesh", { children: [
      /* @__PURE__ */ jsxDEV("cylinderGeometry", { args: [0.06, 0.06, 3, 6] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: "#222" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 21,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("mesh", { position: [0, 1.35, 0.12], children: [
      /* @__PURE__ */ jsxDEV("boxGeometry", { args: [0.5, 0.32, 0.02] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: i % 2 ? "#ff0033" : "#ffcc00" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 23,
      columnNumber: 11
    }, this)
  ] }, i, true, {
    fileName: "<stdin>",
    lineNumber: 18,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
export {
  CornerFlags as default
};
