import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function GoalWithNet({ position = [0, 0, 0], side = "left", visual = {} }) {
  const netRef = useRef();
  const swayIntensity = visual?.ui?.netSway ?? 0.25;
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (netRef.current) {
      netRef.current.rotation.x = Math.sin(t * 1.7 + (side === "left" ? 0 : 1)) * 0.04 * swayIntensity;
      netRef.current.rotation.y = Math.sin(t * 0.9) * 0.02 * swayIntensity;
    }
  });
  return /* @__PURE__ */ React.createElement("group", { position, name: `Goal_${side}`, children: [
    /* @__PURE__ */ React.createElement("mesh", { position: [0, 1.1, 1], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [7.32, 2.2, 0.2] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#ffffff", metalness: 0.2, roughness: 0.6 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [3.6, 0.6, 1], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [0.2, 1.2, 0.2] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#ffffff" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { ref: netRef, position: [0, 1.1, -0.8], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [7.2, 2, 3.6] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#ffffff", opacity: 0.14, transparent: true }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
export {
  GoalWithNet as default
};
