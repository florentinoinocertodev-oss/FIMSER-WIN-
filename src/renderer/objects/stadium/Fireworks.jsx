import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function Fireworks({ visual = {} }) {
  const cfg = visual?.ui?.fireworks || {};
  const enabled = cfg.enabled ?? false;
  const bursts = cfg.bursts || [];
  const particlesRef = useRef([]);
  useFrame(({ clock }) => {
    if (!enabled) return;
    const now = Date.now();
    bursts.forEach((b, idx) => {
      if (!b._played && now >= (b.time || 0)) {
        const count = 28;
        const group = { particles: [], color: b.color || "#ffd27f", start: now, pos: b.pos || [0, 10, 0] };
        for (let i = 0; i < count; i++) {
          const seed = (idx * 97 + i * 31 + 17) % 1e3;
          const s = Math.sin(seed * 12.9898) * 43758.5453 % 1;
          const sx = (s * 2 - 1) * 1.4;
          const sy = 0.6 + Math.abs(Math.sin(seed * 3.1415)) * 1.2;
          const sz = (s * 3.7 % 1 - 0.5) * 1.4;
          const life = 1e3 + seed * 37 % 1200;
          const size = 0.18 + seed % 240 / 1e3;
          group.particles.push({
            dir: [sx, sy, sz],
            life,
            size
          });
        }
        particlesRef.current.push(group);
        b._played = true;
      }
    });
    particlesRef.current = particlesRef.current.filter((g) => now - g.start < 2200);
  });
  return /* @__PURE__ */ jsxDEV("group", { name: "Fireworks_Group", children: particlesRef.current.map((g, gi) => /* @__PURE__ */ jsxDEV("group", { position: g.pos, children: g.particles.map((p, pi) => {
    const age = (Date.now() - g.start) / 1e3;
    const lifeFrac = Math.max(0, 1 - age * 0.8);
    const pos = [p.dir[0] * age * 3, p.dir[1] * age * 3, p.dir[2] * age * 3];
    return /* @__PURE__ */ jsxDEV("mesh", { position: pos, children: [
      /* @__PURE__ */ jsxDEV("sphereGeometry", { args: [p.size * lifeFrac, 6, 6] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: g.color, emissive: g.color, emissiveIntensity: 0.8 * lifeFrac, transparent: true, opacity: 0.9 * lifeFrac }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 62,
        columnNumber: 17
      }, this)
    ] }, pi, true, {
      fileName: "<stdin>",
      lineNumber: 60,
      columnNumber: 15
    }, this);
  }) }, gi, false, {
    fileName: "<stdin>",
    lineNumber: 54,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
export {
  Fireworks as default
};
