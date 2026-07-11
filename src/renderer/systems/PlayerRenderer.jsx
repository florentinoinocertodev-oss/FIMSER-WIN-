import React from "react";
import PlayersGroup from "../objects/PlayersGroup.jsx";
function PlayerRenderer({ players = {}, visual = {} }) {
  const playerEntries = Object.fromEntries(
    Object.entries(players).filter(([, p]) => !p?.goalkeeper)
  );
  return /* @__PURE__ */ React.createElement(PlayersGroup, { players: playerEntries, visual }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}
export {
  PlayerRenderer as default
};
