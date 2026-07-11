import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Skybox({ mode = "day" }) {
  const color = mode === "sunset" ? "#ffb86b" : mode === "night" ? "#04102a" : "#8ec5ff";
  return /* @__PURE__ */ jsxDEV("group", { name: "Skybox", children: /* @__PURE__ */ jsxDEV("mesh", { children: [
    /* @__PURE__ */ jsxDEV("sphereGeometry", { args: [500, 16, 8] }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("meshBasicMaterial", { side: 2, color, depthWrite: false }, void 0, false, {
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
  Skybox as default
};
