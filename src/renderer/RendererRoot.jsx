import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import RendererScene from "./RendererScene.jsx";
function RendererRoot({ visual }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%" }, children: /* @__PURE__ */ React.createElement(
    Canvas,
    {
      camera: { position: [0, 18, 30], fov: 50 },
      shadows: true,
      gl: {
        antialias: true,
        physicallyCorrectLights: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
        powerPreference: "high-performance"
      },
      performance: { min: 0.5, debounce: 50 },
      style: { width: "100%", height: "100%" },
      children: [
        /* @__PURE__ */ React.createElement("ambientLight", { intensity: 0.45 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ React.createElement(
          "directionalLight",
          {
            castShadow: true,
            position: [80, 140, 60],
            intensity: 1.4,
            "shadow-mapSize-width": 2048,
            "shadow-mapSize-height": 2048,
            "shadow-bias": -3e-4
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 33,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ React.createElement("hemisphereLight", { intensity: 0.22, groundColor: "#10121a" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ React.createElement(RendererScene, { visual }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
export {
  RendererRoot as default
};
