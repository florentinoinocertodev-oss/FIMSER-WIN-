import { jsxDEV } from "react/jsx-dev-runtime";
import React, { Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import StadiumRenderer from "./systems/StadiumRenderer.jsx";
import CameraSystem from "./systems/CameraSystem.jsx";
import LightingSystem from "./systems/LightingSystem.jsx";
import CrowdRenderer from "./systems/CrowdRenderer.jsx";
import PlayerRenderer from "./systems/PlayerRenderer.jsx";
import GoalkeeperRenderer from "./systems/GoalkeeperRenderer.jsx";
import BallRenderer from "./systems/BallRenderer.jsx";
import EffectsRenderer from "./systems/EffectsRenderer.jsx";
import ReplayRenderer from "./systems/ReplayRenderer.jsx";
import BroadcastOverlay from "./systems/BroadcastOverlay.jsx";
import AudioPlaceholderSystem from "./systems/AudioPlaceholderSystem.jsx";
import AnimationRenderer from "./systems/AnimationRenderer.jsx";
function ThreeScene({ visual }) {
  const players = visual?.players || {};
  const ball = visual?.ball || null;
  const camera = visual?.camera || null;
  const match = visual?.match || {};
  useFrame(() => {
  });
  return /* @__PURE__ */ jsxDEV(Suspense, { fallback: null, children: [
    /* @__PURE__ */ jsxDEV(LightingSystem, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(StadiumRenderer, { visual, match }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CrowdRenderer, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(PlayerRenderer, { players, visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GoalkeeperRenderer, { players, visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(BallRenderer, { ball, visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CameraSystem, { camera, visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(EffectsRenderer, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ReplayRenderer, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(BroadcastOverlay, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimationRenderer, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AudioPlaceholderSystem, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
export {
  ThreeScene as default
};
