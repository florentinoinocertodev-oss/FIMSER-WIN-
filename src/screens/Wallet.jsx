import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useVisualState } from "../network/visualState.jsx";
function Wallet() {
  const { state } = useVisualState();
  const ui = state.visual?.ui || {};
  const wallet = ui.wallet || { balance: 0, multiplier: 1, cashoutAvailable: false };
  return /* @__PURE__ */ jsxDEV("div", { style: { padding: 16 }, children: /* @__PURE__ */ jsxDEV("div", { className: "glass", style: { padding: 16 }, children: [
    /* @__PURE__ */ jsxDEV("h3", { children: "Wallet" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "small", children: [
      "Balance: $",
      wallet.balance
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "small", children: [
      "Multiplier: x",
      wallet.multiplier
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 12, display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ jsxDEV("a", { className: "btn", href: "/wallet/deposit", children: "Deposit" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("a", { className: "btn", href: "/wallet/withdraw", children: "Withdraw" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
export {
  Wallet as default
};
