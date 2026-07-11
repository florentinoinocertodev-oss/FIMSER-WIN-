import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Link } from "react-router-dom";
import { useVisualState } from "../network/visualState.jsx";
function Dashboard() {
  const { state } = useVisualState();
  return /* @__PURE__ */ jsxDEV("div", { style: { padding: 16, display: "flex", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 800 }, children: "Welcome, Player" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 11,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "small", children: [
          "Connected: ",
          state.connected ? "yes" : "no",
          " \u2022 Latency: ",
          state.latency ?? "\u2014",
          "ms"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 12,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/match/1", children: /* @__PURE__ */ jsxDEV("button", { className: "btn", children: "Join Match" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 12 }, children: [
      /* @__PURE__ */ jsxDEV("h3", { children: "Quick Access" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }, children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/store", children: /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 12, textAlign: "center" }, children: "Store" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 22,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/profile", children: /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 12, textAlign: "center" }, children: "Profile" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 23,
          columnNumber: 31
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 12, textAlign: "center" }, children: "Wallet" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 12 }, children: [
      /* @__PURE__ */ jsxDEV("h3", { children: "Live Match Preview" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "small", children: "This preview renders the latest VisualState (read-only)." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
export {
  Dashboard as default
};
