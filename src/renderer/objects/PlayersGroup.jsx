import React, { useMemo } from "react";
import Player from "./Player.jsx";
function PlayersGroup({ players = {}, visual }) {
  const ids = useMemo(() => Object.keys(players), [players]);
  return /* @__PURE__ */ React.createElement("group", { name: "Players_Group", children: ids.map((id) => /* @__PURE__ */ React.createElement(Player, { id, data: players[id], visual }, id, false, {
    fileName: "<stdin>",
    lineNumber: 26,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  PlayersGroup as default
};
