import React, { Suspense } from "react";
import ThreeScene from "./ThreeScene.jsx";
function RendererScene({ visual }) {
  return /* @__PURE__ */ React.createElement(Suspense, { fallback: null, children: /* @__PURE__ */ React.createElement(ThreeScene, { visual }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  RendererScene as default
};
