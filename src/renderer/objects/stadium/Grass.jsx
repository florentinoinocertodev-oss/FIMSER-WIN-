import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useMemo } from "react";
import * as THREE from "three";
function Grass({ mode = "day", weather = "clear", wear = 0 }) {
  const colorMap = {
    day: { base: "#2aa02a", stripe: "#238f23" },
    sunset: { base: "#2b8a3a", stripe: "#1f6f2b" },
    night: { base: "#0b5a17", stripe: "#084414" }
  }[mode];
  const uniforms = useMemo(() => ({
    uBase: { value: new THREE.Color(colorMap.base) },
    uStripe: { value: new THREE.Color(colorMap.stripe) },
    uTime: { value: 0 },
    uWeather: { value: weather === "rain" ? 1 : 0 },
    uWear: { value: wear },
    uEdgeFade: { value: 0.14 },
    uStripeFreq: { value: 40 }
  }), [colorMap.base, colorMap.stripe, weather, wear]);
  const { useFrame } = require("@react-three/fiber");
  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime() * 0.08;
    uniforms.uWear.value = Math.min(1, Math.max(0, uniforms.uWear.value * 0.98 + Math.sin(clock.getElapsedTime() * 0.2) * 2e-3));
  });
  const mat = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        void main(){
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uBase;
        uniform vec3 uStripe;
        uniform float uTime;
        uniform float uWeather;
        uniform float uWear;
        uniform float uEdgeFade;
        uniform float uStripeFreq;
        varying vec2 vUv;
        // small hash/noise
        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
        float noise(vec2 p){
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0,0.0));
          float c = hash(i + vec2(0.0,1.0));
          float d = hash(i + vec2(1.0,1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(a,b,u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
        }

        void main(){
          // moving stripe pattern to simulate mower passes
          float stripes = sin((vUv.x + uTime * 0.5) * uStripeFreq);
          float stripeMask = smoothstep(0.48,0.52, stripes);

          // base color blended with stripe
          vec3 base = mix(uBase, uStripe, stripeMask * 0.78);

          // wear concentrate towards center pitch lanes and randomized scuffs
          float edge = abs(vUv.y - 0.5);
          float edgeMask = smoothstep(0.0, 0.5, edge);
          float wearNoise = noise(vUv * 48.0) * 0.3;
          float wearFactor = clamp(uWear * (1.0 - edgeMask * (1.0 - uEdgeFade)) + wearNoise, 0.0, 1.0);

          // small tramlines and footprint hints
          float tram = smoothstep(0.0, 0.02, abs(sin(vUv.x * 120.0 + noise(vUv*80.0))));
          wearFactor = max(wearFactor, tram * 0.35);

          vec3 worn = mix(base * 0.9, vec3(0.18,0.14,0.08), wearFactor * 0.95);

          // wet/darken when raining
          if(uWeather > 0.5) worn *= 0.84;

          // micro variation to avoid banding
          float v = 0.96 + (noise(vUv * 16.0) - 0.5) * 0.04;
          gl_FragColor = vec4(worn * v, 1.0);
        }
      `,
      side: THREE.DoubleSide
    });
  }, [uniforms]);
  return /* @__PURE__ */ jsxDEV("mesh", { receiveShadow: true, "rotation-x": -Math.PI / 2, position: [0, 0, 0], name: "Field_Grass", children: [
    /* @__PURE__ */ jsxDEV("planeGeometry", { args: [120, 80, 256, 256] }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("primitive", { object: mat, attach: "material" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
export {
  Grass as default
};
