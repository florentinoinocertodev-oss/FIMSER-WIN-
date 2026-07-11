import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import Lights from "../objects/stadium/Lights.jsx";
function LightingSystem({ visual = {} }) {
  const ui = visual.ui || {};
  const mode = ui.timeOfDay || "day";
  const weather = ui.weather || "clear";
  const intensity = ui.lighting?.intensity ?? 1;
  return /* @__PURE__ */ jsxDEV(Lights, { mode, weather, intensity }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
export {
  LightingSystem as default
};
