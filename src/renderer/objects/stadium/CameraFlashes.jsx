import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function CameraFlashes({ visual = {} }) {
  const cfg = visual?.ui?.cameraFlashes || {};
  const enabled = cfg.enabled ?? false;
  const positions = cfg.positions || [
    [-30, 12, -22],
    [30, 12, -22],
    [-30, 12, 22],
    [30, 12, 22]
  ];
  const rate = cfg.rate ?? 1;
  const refs = useRef([]);
  useFrame(({ clock }) => {
    if (!enabled) return;
    const t = clock.getElapsedTime();
    refs.current.forEach((r, i) => {
      if (!r) return;
      const flicker = Math.max(0, Math.sin(t * rate * (1 + i * 0.13)) * 1);
      r.material.emissiveIntensity = 0.2 + flicker * 1.6;
      r.material.opacity = 0.08 + flicker * 0.48;
    });
  });
  if (!enabled) return null;
  return /* @__PURE__ */ React.createElement("group", { name: "Camera_Flashes", children: positions.map((p, i) => /* @__PURE__ */ React.createElement("mesh", { ref: (el) => refs.current[i] = el, position: p, rotation: [-Math.PI / 2, 0, 0], children: [
    /* @__PURE__ */ React.createElement("planeGeometry", { args: [4, 2] }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#ffffff", transparent: true, opacity: 0.06, emissive: "#ffffff", emissiveIntensity: 0.2 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 11
    }, this)
  ] }, i, true, {
    fileName: "<stdin>",
    lineNumber: 38,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
export {
  CameraFlashes as default
};
