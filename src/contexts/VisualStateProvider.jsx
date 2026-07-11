import { jsxDEV } from "react/jsx-dev-runtime";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { createNetworkService } from "../network/networkService.js";
const VisualStateContext = createContext(null);
function useVisualState() {
  return useContext(VisualStateContext);
}
function VisualStateProvider({ children }) {
  const [state, setState] = useState({
    connected: false,
    lastUpdate: 0,
    visual: {
      // default empty structure (frontend must not derive gameplay)
      players: {},
      ball: null,
      camera: null,
      match: {},
      ui: {}
    },
    latency: null
  });
  const serviceRef = useRef(null);
  useEffect(() => {
    const url = import.meta.env.VITE_WS_URL || "ws://localhost:4000/ws";
    const svc = createNetworkService({
      url,
      onOpen: () => {
        setState((s) => ({ ...s, connected: true }));
        svc.send({ type: "subscribe_visual" });
      },
      onMessage: (evt) => {
        try {
          const data = JSON.parse(evt.data);
          handleMessage(data);
        } catch (e) {
          console.error("Invalid message format", e);
        }
      },
      onClose: () => {
        setState((s) => ({ ...s, connected: false }));
      },
      onError: (e) => {
        console.error("WebSocket error", e);
      },
      pingInterval: 3e3
    });
    serviceRef.current = svc;
    svc.start();
    function handleMessage(msg) {
      if (!msg || typeof msg !== "object") return;
      if (msg.type === "visualState") {
        setState((s) => ({
          ...s,
          lastUpdate: Date.now(),
          visual: msg.payload
        }));
      } else if (msg.type === "pong") {
        const now = Date.now();
        const latency = now - (msg.clientSentAt || now);
        setState((s) => ({ ...s, latency }));
      } else if (msg.type === "notification") {
        setState((s) => ({ ...s, visual: { ...s.visual, ui: { ...s.visual.ui || {}, notification: msg.payload } } }));
      } else {
        setState((s) => ({ ...s, visual: { ...s.visual, ui: { ...s.visual.ui || {}, extra: msg } } }));
      }
    }
    return () => {
      try {
        svc.stop();
      } catch (e) {
      }
      serviceRef.current = null;
    };
  }, []);
  function send(obj) {
    return serviceRef.current ? serviceRef.current.send(obj) : false;
  }
  return /* @__PURE__ */ jsxDEV(VisualStateContext.Provider, { value: { state, send }, children }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
export {
  VisualStateProvider,
  useVisualState
};
