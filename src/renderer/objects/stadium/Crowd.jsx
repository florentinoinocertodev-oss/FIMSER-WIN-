import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function Crowd({ density = 0.6, visual = {} }) {
  const groupRef = useRef();
  const sections = 4;
  const perSection = Math.round(30 * density);
  const items = [];
  for (let s = 0; s < sections; s++) {
    for (let i = 0; i < perSection; i++) {
      const x = -60 + i * 4 + s * 30;
      const y = 8 + s % 3 * 1.6;
      const z = s < 2 ? -54 : 54;
      items.push({ x, y, z, key: `c${s}-${i}`, s, i });
    }
  }
  const intensity = visual?.ui?.crowdIntensity ?? 0.6;
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.01 * intensity;
  });
  return /* @__PURE__ */ React.createElement("group", { name: "Crowd_Placeholders", ref: groupRef, children: items.map((it) => {
    const seed = (it.s * 97 + it.i * 13) % 100;
    const phase = seed / 100;
    return /* @__PURE__ */ React.createElement(
      "mesh",
      {
        position: [it.x, it.y, it.z],
        onUpdate: (self) => {
          const t = performance.now() / 1e3 + phase;
          const sway = Math.sin(t * 2) * 0.02 * intensity;
          const bob = Math.abs(Math.cos(t * 1.5 + phase)) * 0.015 * intensity;
          self.rotation.y = sway;
          self.scale.y = 1 + bob;
        },
        children: [
          /* @__PURE__ */ React.createElement("boxGeometry", { args: [3.2, 1.2, 1] }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#222" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ]
      },
      it.key,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
export {
  Crowd as default
};
