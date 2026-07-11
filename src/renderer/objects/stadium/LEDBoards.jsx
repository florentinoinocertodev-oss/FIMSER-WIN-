import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
function LEDBoards({ visual = {} }) {
  const ads = visual.ui && visual.ui.adFrames || ["#ffdd57", "#ff6b6b", "#57a0ff"];
  const speed = visual.ui && visual.ui.adSpeed || 0.8;
  const meshRefs = useRef([]);
  const colors = useMemo(() => ads.map((a) => typeof a === "string" ? a : "#ffffff"), [ads]);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    meshRefs.current.forEach((m, i) => {
      if (!m || !m.material) return;
      const idx = Math.abs(Math.floor((t + i) % colors.length));
      try {
        m.material.color.setStyle(colors[idx]);
        m.material.emissive.setStyle(colors[(idx + 1) % colors.length]);
        m.material.emissiveIntensity = 0.45 + Math.abs(Math.sin(t + i)) * 0.6;
      } catch (e) {
      }
    });
  });
  return /* @__PURE__ */ jsxDEV("group", { name: "LEDBoards", children: [
    /* @__PURE__ */ jsxDEV("mesh", { ref: (r) => meshRefs.current[0] = r, position: [0, 22, -62], children: [
      /* @__PURE__ */ jsxDEV("boxGeometry", { args: [40, 10, 1] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: colors[0], emissive: colors[0], emissiveIntensity: 0.6, metalness: 0.1, roughness: 0.2 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("mesh", { ref: (r) => meshRefs.current[1] = r, position: [0, 22, 62], children: [
      /* @__PURE__ */ jsxDEV("boxGeometry", { args: [40, 10, 1] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: colors[1 % colors.length], emissive: colors[1 % colors.length], emissiveIntensity: 0.6, metalness: 0.1, roughness: 0.2 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("mesh", { ref: (r) => meshRefs.current[2] = r, position: [0, 16, -38], children: [
      /* @__PURE__ */ jsxDEV("boxGeometry", { args: [120, 2, 1] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: colors[2 % colors.length], emissive: colors[2 % colors.length], emissiveIntensity: 0.5 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("mesh", { ref: (r) => meshRefs.current[3] = r, position: [0, 16, 38], children: [
      /* @__PURE__ */ jsxDEV("boxGeometry", { args: [120, 2, 1] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: colors[0], emissive: colors[0], emissiveIntensity: 0.35 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
export {
  LEDBoards as default
};
