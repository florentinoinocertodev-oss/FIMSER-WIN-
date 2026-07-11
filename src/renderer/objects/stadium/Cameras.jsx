import React from "react";
const broadcast = [
  { name: "main_broadcast", position: [0, 18, 40], target: [0, 0, 0], fov: 50 },
  { name: "side_broadcast", position: [45, 12, 0], target: [0, 0, 0], fov: 45 },
  { name: "goal_cam_left", position: [0, 10, -44], target: [0, 1, -38], fov: 35 },
  { name: "goal_cam_right", position: [0, 10, 44], target: [0, 1, 38], fov: 35 },
  { name: "corner_cam_1", position: [-58, 6, -36], target: [-52, 1, -32], fov: 60 }
];
const replay = [
  { name: "replay_overview", position: [0, 25, 0], target: [0, 0, 0], fov: 40 },
  { name: "replay_close", position: [5, 6, 10], target: [0, 1, 0], fov: 30 }
];
function Cameras() {
  return null;
}
export {
  broadcast,
  Cameras as default,
  replay
};
