import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useParams } from "react-router-dom";
import MatchLayout from "../components/match/MatchLayout.jsx";
function MatchPage() {
  const { id } = useParams();
  return /* @__PURE__ */ jsxDEV(MatchLayout, { matchId: id }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
export {
  MatchPage as default
};
