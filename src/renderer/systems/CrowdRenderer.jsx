import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import CrowdAdvanced from "../objects/stadium/CrowdAdvanced.jsx";
function CrowdRenderer({ visual = {} }) {
  const cfg = visual.ui?.crowd || {};
  const density = cfg.density ?? 0.8;
  return /* @__PURE__ */ jsxDEV(CrowdAdvanced, { visual, density }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
export {
  CrowdRenderer as default
};
