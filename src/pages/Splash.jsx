import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Splash() {
  const nav = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => nav("/auth/login"), 1500);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { style: { height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ React.createElement("div", { style: { width: 160, height: 160, borderRadius: 24, background: "linear-gradient(180deg,#15171a,#0b0d10)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 28 }, children: "FW" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("div", { className: "small", children: "FINSER WIN" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  Splash as default
};
