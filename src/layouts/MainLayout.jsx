import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Outlet, Link } from "react-router-dom";
function MainLayout() {
  return /* @__PURE__ */ jsxDEV("div", { className: "mobile-full", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "header glass", style: { padding: "10px 14px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { width: 44, height: 44, background: "#111318", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }, children: "FW" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 9,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "small", children: "FINSER WIN" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 10,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/dashboard", className: "small", children: "Dashboard" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/store", className: "small", children: "Store" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/profile", className: "small", children: "Profile" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 15,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { style: { flex: 1, overflow: "hidden" }, children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "glass", style: { padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "small", children: "Mobile-first \u2022 Visual client only" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "small", children: "v0.1" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
export {
  MainLayout as default
};
