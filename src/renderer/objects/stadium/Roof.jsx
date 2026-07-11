import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Roof() {
  return /* @__PURE__ */ jsxDEV("group", { name: "Stadium_Roof", children: [
    /* @__PURE__ */ jsxDEV("mesh", { position: [0, 30, 0], children: [
      /* @__PURE__ */ jsxDEV("boxGeometry", { args: [200, 3, 120] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: "#0b0b0c", roughness: 0.5 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    [-1, 1].map((s, i) => /* @__PURE__ */ jsxDEV("mesh", { position: [s * 60, 26, 0], children: [
      /* @__PURE__ */ jsxDEV("boxGeometry", { args: [4, 12, 4] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: "#0a0a0a" }, void 0, false, {
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
