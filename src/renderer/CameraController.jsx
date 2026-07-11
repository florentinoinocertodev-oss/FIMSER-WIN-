import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
function CameraController({ camera }) {
  const { camera: cam } = useThree();
  const prev = useRef();
  useEffect(() => {
    if (!camera) return;
    if (camera.fov) cam.fov = camera.fov;
    if (camera.position) {
      cam.position.set(camera.position.x, camera.position.y, camera.position.z);
    }
    if (camera.target) {
      cam.lookAt(camera.target.x, camera.target.y, camera.target.z);
    }
    cam.updateProjectionMatrix();
    prev.current = camera;
  }, [camera, cam]);
  return null;
}
export {
  CameraController as default
};
