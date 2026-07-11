import React, { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
function Effects({ visual = {} }) {
  const ui = visual?.ui || {};
  const weather = ui.weather || "clear";
  const fogCfg = ui.fog || null;
  const rainGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const ix = i % 20;
      const iz = Math.floor(i / 20);
      const seed = i * 127.1 % 1e3;
      const jitterX = Math.sin(seed * 12.9898) * 43758.5453 % 1;
      const jitterY = Math.sin((seed + 37) * 78.233) * 43758.5453 % 1;
      const jitterZ = Math.sin((seed + 97) * 4.123) * 43758.5453 % 1;
      const x = (ix - 10) * 8 + (jitterX * 4 - 2);
      const y = 30 + jitterY * 10;
      const z = (iz - 5) * 10 + (jitterZ * 6 - 3);
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);
  useFrame(({ clock }) => {
  });
  return /* @__PURE__ */ React.createElement("group", { children: [
    fogCfg && /* @__PURE__ */ React.createElement("fog", { attach: "fog", args: [fogCfg.color || "#0b0f14", fogCfg.near ?? 6, fogCfg.far ?? 140] }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 52,
      columnNumber: 18
    }, this),
    ui.timeOfDay === "sunset" && /* @__PURE__ */ React.createElement("hemisphereLight", { intensity: 0.25, groundColor: "#7b3e1f" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 55,
      columnNumber: 37
    }, this),
    ui.volumetrics && ui.volumetrics.enabled && (ui.volumetrics.lights || []).map((l, i) => /* @__PURE__ */ React.createElement("group", { position: [l.position?.x || 0, l.position?.y || 20, l.position?.z || 0], children: [
      /* @__PURE__ */ React.createElement(
        "spotLight",
        {
          castShadow: true,
          angle: l.angle ?? 0.45,
          intensity: l.intensity ?? 2,
          color: l.color || "#fff",
          distance: l.distance ?? 160,
          penumbra: 0.4
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 62,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ React.createElement("mesh", { "rotation-x": -Math.PI / 2, position: [0, -((l.distance ?? 80) / 2) + (l.offsetY ?? 0), 0], scale: [1, (l.distance ?? 80) / 20, 1], children: [
        /* @__PURE__ */ React.createElement("coneGeometry", { args: [l.radius ?? 12, l.distance ?? 80, 12] }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: l.color || "#fff", transparent: true, opacity: 0.06, depthWrite: false }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 73,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, i, true, {
      fileName: "<stdin>",
      lineNumber: 61,
      columnNumber: 11
    }, this)),
    weather === "rain" && /* @__PURE__ */ React.createElement(
      "points",
      {
        geometry: rainGeo,
        onUpdate: (self) => {
          const posAttr = self.geometry.attributes.position;
          const now = performance.now() / 1e3;
          for (let i = 0; i < posAttr.count; i++) {
            let y = posAttr.getY(i) - 0.6;
            if (y < -2) y = Math.random() * 40 + 30;
            posAttr.setY(i, y);
          }
          posAttr.needsUpdate = true;
        },
        children: /* @__PURE__ */ React.createElement("pointsMaterial", { size: 0.6, color: "#cfe8ff", transparent: true, opacity: 0.06, depthWrite: false }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 80,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  Effects as default
};
