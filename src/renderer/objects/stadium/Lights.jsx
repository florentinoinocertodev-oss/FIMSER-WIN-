import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Lights({ mode = "day", weather = "clear", intensity = 1 }) {
  const isNight = mode === "night";
  const sunIntensity = mode === "sunset" ? 0.8 : 1;
  return /* @__PURE__ */ jsxDEV("group", { name: "Stadium_Lights", children: [
    /* @__PURE__ */ jsxDEV("directionalLight", { castShadow: true, position: [100, 120, 40], intensity: sunIntensity * intensity }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    [
      [90, 30, 90],
      [-90, 30, 90],
      [90, 30, -90],
      [-90, 30, -90]
    ].map((pos, i) => /* @__PURE__ */ jsxDEV("group", { position: pos, children: /* @__PURE__ */ jsxDEV("directionalLight", { castShadow: true, position: [0, 20, 0], intensity: isNight ? 2.4 : 0.6 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 24,
      columnNumber: 11
    }, this) }, i, false, {
      fileName: "<stdin>",
      lineNumber: 23,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ jsxDEV("ambientLight", { intensity: isNight ? 0.25 : 0.6 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
export {
  Lights as default
};
