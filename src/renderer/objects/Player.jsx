import React, { useMemo } from "react";
import * as THREE from "three";
function Player({ id, data = {} }) {
  const pos = data.position ? [data.position.x, data.position.y, data.position.z] : [0, 0, 0];
  const rot = data.rotation ? [data.rotation.x, data.rotation.y, data.rotation.z] : [0, 0, 0];
  const animation = data.animation || "idle";
  const speed = data.speed ?? 0;
  const stamina = data.stamina ?? 1;
  const team = data.team || "home";
  const goalkeeper = !!data.goalkeeper;
  const selected = !!data.selected;
  const hasBall = !!data.hasBall;
  const number = data.number ?? "";
  const name = data.name ?? "";
  const captain = !!data.captain;
  const appearance = data.appearance || {};
  const teamColor = team === "home" ? appearance.teamColor || "#1e88e5" : appearance.teamColor || "#e53935";
  const shirtDark = useMemo(() => new THREE.Color(teamColor).multiplyScalar(0.82).getStyle(), [teamColor]);
  const skinTone = appearance.skinTone || "#f1d2b0";
  const hairColor = appearance.hairColor || "#231815";
  const bootColor = appearance.boots || "#0b0b0b";
  const animGlow = animation === "sprint" || animation === "shoot" ? 0.16 : 0;
  const speedFactor = Math.min(1.6, 1 + speed / 8);
  return /* @__PURE__ */ React.createElement("group", { name: `player-${id}`, position: pos, rotation: rot, castShadow: true, receiveShadow: true, children: [
    /* @__PURE__ */ React.createElement("mesh", { "rotation-x": -Math.PI / 2, position: [0, 0.01, 0], scale: [1.5 * speedFactor, 1, 1.5 * speedFactor], children: [
      /* @__PURE__ */ React.createElement("circleGeometry", { args: [1.05, 24] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshBasicMaterial", { color: `rgba(0,0,0,${0.28 * Math.min(1, 0.5 + speed / 6)})`, transparent: true }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [0, 0.95, 0], children: [
      /* @__PURE__ */ React.createElement("cylinderGeometry", { args: [0.34, 0.44, 1.92, 14] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement(
        "meshStandardMaterial",
        {
          color: teamColor,
          roughness: 0.44,
          metalness: 0.06,
          emissive: animGlow ? teamColor : "#000",
          emissiveIntensity: animGlow
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [0, 1.78, 0], children: [
      /* @__PURE__ */ React.createElement("sphereGeometry", { args: [0.315, 12, 8] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: skinTone, roughness: 0.46 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [0, 1.86, 0.04], children: [
      /* @__PURE__ */ React.createElement("sphereGeometry", { args: [0.17, 8, 6] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: hairColor, roughness: 0.6 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [0, 0.35, 0], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [0.64, 0.52, 0.44] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: shirtDark, roughness: 0.7 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [0.48, 1.12, 0], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [0.16, 0.68, 0.16] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: skinTone, roughness: 0.6 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [-0.48, 1.12, 0], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [0.16, 0.68, 0.16] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: skinTone, roughness: 0.6 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [0.22, -0.06, 0.28], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [0.28, 0.12, 0.52] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: bootColor, metalness: 0.25, roughness: 0.35 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("mesh", { position: [-0.22, -0.06, 0.28], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [0.28, 0.12, 0.52] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: bootColor, metalness: 0.25, roughness: 0.35 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    goalkeeper && /* @__PURE__ */ React.createElement("mesh", { position: [0, 1.18, 0.46], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [0.78, 0.16, 0.24] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: appearance.gloveColor || "#333", roughness: 0.5 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    captain && /* @__PURE__ */ React.createElement("mesh", { position: [0.36, 1, 0], children: [
      /* @__PURE__ */ React.createElement("boxGeometry", { args: [0.22, 0.12, 0.08] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#ffd400" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    number !== "" && /* @__PURE__ */ React.createElement("mesh", { position: [0, 1.05, -0.28], "rotation-x": -0.18, children: [
      /* @__PURE__ */ React.createElement("planeGeometry", { args: [0.32, 0.44] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: "#0b0f14" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 118,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 116,
      columnNumber: 9
    }, this),
    name && /* @__PURE__ */ React.createElement("mesh", { position: [0, 2.08, 0.01], children: [
      /* @__PURE__ */ React.createElement("planeGeometry", { args: [0.9, 0.18] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshBasicMaterial", { color: "rgba(255,255,255,0.06)", transparent: true }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 126,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 124,
      columnNumber: 9
    }, this),
    selected && /* @__PURE__ */ React.createElement("mesh", { "rotation-x": -Math.PI / 2, position: [0, 0.02, 0], children: [
      /* @__PURE__ */ React.createElement("ringGeometry", { args: [0.92, 1.12, 32] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshBasicMaterial", { color: "#ffdd57", transparent: true, opacity: 0.95 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 134,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    hasBall && /* @__PURE__ */ React.createElement("mesh", { position: [0, 2.32, 0], children: [
      /* @__PURE__ */ React.createElement("ringGeometry", { args: [0.28, 0.42, 16] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshBasicMaterial", { color: "#ffffff", transparent: true, opacity: 0.9 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 142,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 140,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ React.createElement(AnimationHint, { animation, speed, stamina }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement(NumberAndName, { number, name, teamColor }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 148,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function AnimationHint({ animation, speed, stamina }) {
  const glow = animation === "sprint" || animation === "shoot" ? 0.12 : 0;
  const scale = animation === "idle" ? 1 : animation === "walk" ? 1.015 : animation === "run" ? 1.045 : 1.08;
  return /* @__PURE__ */ React.createElement("group", { scale: [scale, scale, scale], children: /* @__PURE__ */ React.createElement("mesh", { position: [0, 0.95, 0], children: [
    /* @__PURE__ */ React.createElement("sphereGeometry", { args: [8e-3, 4, 4] }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 161,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: `rgba(255,255,255,${glow})` }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 162,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 160,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 159,
    columnNumber: 5
  }, this);
}
function NumberAndName({ number, name, teamColor }) {
  return /* @__PURE__ */ React.createElement("group", { children: [
    number !== "" && /* @__PURE__ */ React.createElement("mesh", { position: [0, 1.05, -0.26], "rotation-x": -0.18, children: [
      /* @__PURE__ */ React.createElement("planeGeometry", { args: [0.28, 0.36] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 174,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshBasicMaterial", { color: teamColor }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 175,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 173,
      columnNumber: 9
    }, this),
    name && /* @__PURE__ */ React.createElement("mesh", { position: [0, 2.08, 0.01], children: [
      /* @__PURE__ */ React.createElement("planeGeometry", { args: [0.9, 0.18] }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 180,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("meshBasicMaterial", { color: "rgba(255,255,255,0.06)", transparent: true }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 181,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 179,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 171,
    columnNumber: 5
  }, this);
}
export {
  Player as default
};
