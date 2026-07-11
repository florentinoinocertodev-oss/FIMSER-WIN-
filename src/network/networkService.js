/**
 * NetworkService
 * Small wrapper around WebSocket to centralize connection, ping/pong and simple reconnect/backoff logic.
 *
 * The service intentionally keeps behavior minimal: it exposes start/stop and a message callback.
 * The VisualStateProvider remains the single source of truth for VisualState and UI state updates.
 */

export function createNetworkService({ url, onOpen, onMessage, onClose, onError, pingInterval = 3000 }) {
  let ws = null;
  let pingTimer = null;
  let closedByUser = false;
  const listeners = {
    open: onOpen || (() => {}),
    message: onMessage || (() => {}),
    close: onClose || (() => {}),
    error: onError || (() => {}),
  };

  function start() {
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) return;
    closedByUser = false;
    ws = new WebSocket(url);

    ws.onopen = (ev) => {
      listeners.open(ev, ws);
      startPing();
    };

    ws.onmessage = (evt) => {
      listeners.message(evt, ws);
    };

    ws.onclose = (ev) => {
      stopPing();
      listeners.close(ev, ws);
      // auto reconnect unless user closed
      if (!closedByUser) {
        // simple backoff
        setTimeout(() => start(), 1500);
      }
    };

    ws.onerror = (ev) => {
      listeners.error(ev, ws);
    };
  }

  function stop() {
    closedByUser = true;
    stopPing();
    try {
      if (ws) ws.close();
    } catch (e) {}
    ws = null;
  }

  function send(obj) {
    try {
      if (!ws || ws.readyState !== WebSocket.OPEN) return false;
      ws.send(typeof obj === "string" ? obj : JSON.stringify(obj));
      return true;
    } catch (e) {
      return false;
    }
  }

  function startPing() {
    stopPing();
    pingTimer = setInterval(() => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        const pkt = { type: "ping", clientSentAt: Date.now() };
        send(pkt);
      }
    }, pingInterval);
  }

  function stopPing() {
    if (pingTimer) {
      clearInterval(pingTimer);
      pingTimer = null;
    }
  }

  return {
    start,
    stop,
    send,
    get socket() {
      return ws;
    },
  };
}