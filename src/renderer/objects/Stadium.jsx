import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import Grass from "./stadium/Grass.jsx";
import FieldMarkings from "./stadium/FieldMarkings.jsx";
import Grandstands from "./stadium/Grandstands.jsx";
import Roof from "./stadium/Roof.jsx";
import GoalWithNet from "./stadium/GoalWithNet.jsx";
import CornerFlags from "./stadium/CornerFlags.jsx";
import Benches from "./stadium/Benches.jsx";
import Tunnels from "./stadium/Tunnels.jsx";
import LEDBoards from "./stadium/LEDBoards.jsx";
import Lights from "./stadium/Lights.jsx";
import Crowd from "./stadium/CrowdAdvanced.jsx";
import CameraFlashes from "./stadium/CameraFlashes.jsx";
import Fireworks from "./stadium/Fireworks.jsx";
import Skybox from "./stadium/Skybox.jsx";
import Cameras from "./stadium/Cameras.jsx";
import Reflections from "./stadium/Reflections.jsx";
const broadcastCameras = Cameras.broadcast;
const replayCameras = Cameras.replay;
function Stadium({ match, visual = {} }) {
  const ui = visual.ui || {};
  const mode = ui.timeOfDay || "day";
  const weather = ui.weather || "clear";
  const lighting = ui.lighting || {};
  return /* @__PURE__ */ jsxDEV("group", { name: "Stadium_Root", children: [
    /* @__PURE__ */ jsxDEV(Skybox, { mode }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Reflections, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Lights, { mode, weather, intensity: lighting.intensity ?? 1 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Grass, { mode, weather }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FieldMarkings, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("group", { children: [
      /* @__PURE__ */ jsxDEV(GoalWithNet, { position: [0, 0, -39], side: "left", visual }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(GoalWithNet, { position: [0, 0, 39], side: "right", visual }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CornerFlags, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Benches, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Tunnels, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Grandstands, { mode }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Roof, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(LEDBoards, { visual }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Crowd, { density: 0.8 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    weather === "rain" && /* @__PURE__ */ jsxDEV("group", { name: "Rain_Particles", children: /* @__PURE__ */ jsxDEV("mesh", { position: [0, 40, 0], children: [
      /* @__PURE__ */ jsxDEV("boxGeometry", { args: [0.1, 2, 0.01] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("meshStandardMaterial", { color: "#cfe8ff", transparent: true, opacity: 0.06 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Cameras, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Reflections, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
export {
  broadcastCameras,
  Stadium as default,
  replayCameras
};
