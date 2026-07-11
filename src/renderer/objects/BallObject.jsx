import React from "react";
function BallObject({ ball }) {
  if (!ball || !ball.position) return null;
  const pos = [ball.position.x, ball.position.y, ball.position.z];
  const rot = ball.rotation ? [ball.rotation.x, ball.rotation.y, ball.rotation.z] : [0, 0, 0];
  const owner = ball.owner ?? null;
  return /* @__PURE__ */ React.createElement("group", { position: pos, rotation: rot, name: "BallObject", castShadow: true, children: [
    /* @__PURE__ */ React.createElement("mesh", { castShadow: true, children: [
      /* @__PURE__ */ React.createElement("sphereGeometry", { args: [0.36, 24, 24] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#f8f8f8", metalness: 0.25, roughness: 0.35 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    ball.rotation && /* @__PURE__ */ React.createElement("mesh", { rotation: [0, 0, ball.rotation.z || 0], position: [0, 0, 0], children: [
      /* @__PURE__ */ React.createElement("torusGeometry", { args: [0.42, 0.01, 6, 32] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#d0d0d0", metalness: 0.2, roughness: 0.6 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    owner && /* @__PURE__ */ React.createElement("mesh", { position: [0, 0.9, 0], children: [
      /* @__PURE__ */ React.createElement("ringGeometry", { args: [0.38, 0.52, 24] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshBasicMaterial", { color: "#ffdd57", transparent: true, opacity: 0.85 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  BallObject as default
};
