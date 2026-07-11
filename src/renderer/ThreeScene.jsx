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
  return /* @__PURE__ */ React.createElement(Suspense, { fallback: null, children: [
    /* @__PURE__ */ React.createElement(LightingSystem, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(StadiumRenderer, { visual, match }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(CrowdRenderer, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(PlayerRenderer, { players, visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(GoalkeeperRenderer, { players, visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(BallRenderer, { ball, visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(CameraSystem, { camera, visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(EffectsRenderer, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(ReplayRenderer, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(BroadcastOverlay, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(AnimationRenderer, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(AudioPlaceholderSystem, { visual }, void 0, false, {
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
