import React from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const nav = useNavigate();
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", height: "100%", alignItems: "center", justifyContent: "center", padding: 20 }, children: /* @__PURE__ */ React.createElement("div", { className: "glass", style: { width: "100%", maxWidth: 420, padding: 20, borderRadius: 16 }, children: [
    /* @__PURE__ */ React.createElement("h2", { children: "Create account" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
      /* @__PURE__ */ React.createElement("input", { placeholder: "Display name", style: { padding: 12, borderRadius: 8, border: "none", background: "#081018" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("input", { placeholder: "Email", style: { padding: 12, borderRadius: 8, border: "none", background: "#081018" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("input", { placeholder: "Password", type: "password", style: { padding: 12, borderRadius: 8, border: "none", background: "#081018" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ React.createElement("button", { className: "btn", onClick: () => nav("/dashboard"), children: "Create" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 14,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  Register as default
};
