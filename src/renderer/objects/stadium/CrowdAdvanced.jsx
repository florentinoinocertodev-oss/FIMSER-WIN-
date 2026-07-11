import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
function CrowdAdvanced({ density = 0.8, visual = {} }) {
  const cfg = visual?.ui?.crowd || {};
  const intensity = cfg.intensity ?? 0.7;
  const sections = cfg.sections ?? 8;
  const perSection = Math.max(10, Math.round(60 * Math.min(1, density)));
  const sideCount = 2;
  const total = sections * perSection * sideCount;
  const instRef = useRef();
  const colorPalette = cfg.palette || [
    { shirt: "#e53935", scarf: "#ffcc00" },
    { shirt: "#1e88e5", scarf: "#ffffff" },
    { shirt: "#2e7d32", scarf: "#ffd27f" },
    { shirt: "#6a1b9a", scarf: "#ffffff" }
  ];
  const instances = useMemo(() => {
    const out = [];
    let idx = 0;
    for (let side = 0; side < sideCount; side++) {
      const zBase = side === 0 ? -54 : 54;
      for (let s = 0; s < sections; s++) {
        for (let i = 0; i < perSection; i++) {
          const colIdx = (s + i + side) % colorPalette.length;
          const x = -58 + s * 14 + i % 8 * 1.8 + i % 3 * 0.12;
          const y = 6 + Math.floor(i / 8) * 1.4 + s * 0.18;
          const z = zBase + (s % 2 === 0 ? -1 : 1) * (colIdx * 0.08 + (i % 2 ? 0.3 : -0.3));
          const seed = (s * 17 + i * 7 + side * 3) % 1e3;
          out.push({
            id: `crowd-${idx++}`,
            pos: [x, y, z],
            scale: 1 + seed % 7 / 300,
            palette: colorPalette[colIdx],
            phase: seed % 100 / 100,
            side
          });
        }
      }
    }
    return out;
  }, [sections, perSection, colorPalette]);
  useFrame(({ clock }) => {
    if (!instRef.current) return;
    const mesh = instRef.current;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < instances.length; i++) {
      const it = instances[i];
      const phase = it.phase * Math.PI * 2;
      const sway = Math.sin(clock.getElapsedTime() * (0.9 + it.phase * 0.9) + phase) * 0.035 * intensity;
      const bob = 1 + Math.sin(clock.getElapsedTime() * (1.1 + it.phase * 0.3) + phase) * 0.02 * intensity;
      dummy.position.set(it.pos[0], it.pos[1] + sway, it.pos[2]);
      dummy.scale.set(it.scale, bob, it.scale);
      dummy.rotation.y = Math.sin(it.phase * 7) * 0.06;
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      if (mesh.instanceColor) {
        const col = new THREE.Color(it.palette.shirt);
        mesh.setColorAt(i, col);
      }
    }
    mesh.count = instances.length;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });
  const flags = cfg.flags || [];
  return /* @__PURE__ */ React.createElement("group", { name: "Crowd_Advanced", children: [
    /* @__PURE__ */ React.createElement("instancedMesh", { ref: instRef, args: [null, null, total], castShadow: true, receiveShadow: true, children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [2.2, 0.9, 0.8] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { vertexColors: true, color: "#333", roughness: 0.7, metalness: 0.02 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    flags.map((f, idx) => /* @__PURE__ */ React.createElement("group", { position: f.pos || [0, 12, 0], scale: f.scale || 1, children: /* @__PURE__ */ React.createElement("mesh", { position: [0, 0.2, 0], children: [
      /* @__PURE__ */ React.createElement("planeGeometry", { args: [2.8, 1.4] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: f.color || "#ffffff", side: 2 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 98,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 96,
      columnNumber: 11
    }, this) }, idx, false, {
      fileName: "<stdin>",
      lineNumber: 95,
      columnNumber: 9
    }, this)),
    visual?.ui?.cameraFlashes && /* @__PURE__ */ React.createElement("group", { name: "CameraFlash_Placeholder", position: [0, 18, -40] }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 104,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
export {
  CrowdAdvanced as default
};
