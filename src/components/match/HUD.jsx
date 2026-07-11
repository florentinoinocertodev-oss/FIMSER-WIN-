import React, { useEffect, useMemo, useState, useRef } from "react";
import { useVisualState } from "../../network/visualState.jsx";
function HUD() {
  const { state } = useVisualState();
  const visual = state.visual || {};
  const match = visual.match || {};
  const ui = visual.ui || {};
  const scoreLeft = match.scoreLeft ?? 0;
  const scoreRight = match.scoreRight ?? 0;
  const time = match.time ?? "00:00";
  const logoLeft = ui.logos?.left || null;
  const logoRight = ui.logos?.right || null;
  const selectedId = ui.selectedPlayerId || null;
  const selectedPlayer = selectedId ? visual.players?.[selectedId] || null : null;
  const possession = match.possession || null;
  const commentary = ui.commentary || "Welcome to the match";
  const wallet = ui.wallet ?? { balance: 0, multiplier: 1, cashoutAvailable: false };
  const notifications = ui.notifications ?? [];
  const latency = state.latency ?? null;
  const [fps, setFps] = useState(0);
  const framesRef = useRef({ last: performance.now(), count: 0 });
  useEffect(() => {
    let raf = null;
    function tick() {
      const now = performance.now();
      framesRef.current.count++;
      if (now - framesRef.current.last >= 1e3) {
        setFps(Math.round(framesRef.current.count * 1e3 / (now - framesRef.current.last)));
        framesRef.current.last = now;
        framesRef.current.count = 0;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const minimap = ui.minimap || null;
  const leftCards = match.cards?.left ?? 0;
  const rightCards = match.cards?.right ?? 0;
  const leftCorners = match.corners?.left ?? 0;
  const rightCorners = match.corners?.right ?? 0;
  const leftSubs = match.subs?.left ?? 0;
  const rightSubs = match.subs?.right ?? 0;
  const { send } = useVisualState();
  function handlePause() {
    if (send) send({ type: "ui_action", action: "pause_request" });
  }
  function handleReplay() {
    if (send) send({ type: "ui_action", action: "request_replay" });
  }
  function handleCashout() {
    if (send) send({ type: "ui_action", action: "request_cashout" });
  }
  const accentLeft = ui.teamColors?.left || "#1e88e5";
  const accentRight = ui.teamColors?.right || "#e53935";
  return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 12 }, children: [
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 8, pointerEvents: "auto" }, children: [
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", flex: 1 }, children: /* @__PURE__ */ React.createElement("div", { className: "glass", style: { display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", minWidth: 340 }, children: [
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ React.createElement("div", { style: { width: 44, height: 44, borderRadius: 8, overflow: "hidden", background: "#081018", display: "flex", alignItems: "center", justifyContent: "center" }, children: logoLeft ? /* @__PURE__ */ React.createElement("img", { src: logoLeft, alt: "left", style: { width: "100%", height: "100%", objectFit: "cover" } }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 104,
            columnNumber: 29
          }, this) : /* @__PURE__ */ React.createElement("div", { style: { width: 28, height: 28, background: accentLeft, borderRadius: 6 } }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 104,
            columnNumber: 127
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 103,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800, fontSize: 20 }, children: scoreLeft }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" }, children: [
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700 }, children: time }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "rgba(255,255,255,0.7)" }, children: match.stageName || "1st Half" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 111,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800, fontSize: 20 }, children: scoreRight }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ React.createElement("div", { style: { width: 44, height: 44, borderRadius: 8, overflow: "hidden", background: "#081018", display: "flex", alignItems: "center", justifyContent: "center" }, children: logoRight ? /* @__PURE__ */ React.createElement("img", { src: logoRight, alt: "right", style: { width: "100%", height: "100%", objectFit: "cover" } }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 117,
            columnNumber: 30
          }, this) : /* @__PURE__ */ React.createElement("div", { style: { width: 28, height: 28, background: accentRight, borderRadius: 6 } }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 117,
            columnNumber: 130
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 116,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 114,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 101,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 8, minWidth: 140, pointerEvents: "auto" }, children: /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ React.createElement("div", { children: [
          /* @__PURE__ */ React.createElement("div", { className: "small", children: "Wallet" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800 }, children: [
            "$",
            wallet.balance ?? 0
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 128,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" }, children: [
          /* @__PURE__ */ React.createElement("div", { className: "small", children: [
            "x",
            wallet.multiplier?.toFixed?.(2) ?? wallet.multiplier
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ React.createElement("button", { className: "btn", style: { marginTop: 6, padding: "6px 8px" }, onClick: handleCashout, disabled: !wallet.cashoutAvailable, children: "Cashout" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 130,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 125,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 12, pointerEvents: "auto" }, children: [
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, maxWidth: 320 }, children: [
        /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 10, display: "flex", gap: 10, alignItems: "center" }, children: [
          /* @__PURE__ */ React.createElement("div", { style: { width: 56, height: 56, borderRadius: 8, background: "#081018", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ React.createElement("div", { style: { width: 44, height: 44, borderRadius: 6, background: "#222" } }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 145,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 143,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800 }, children: selectedPlayer?.name || "\u2014" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 148,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { className: "small", children: selectedPlayer?.number ? `#${selectedPlayer.number}` : selectedPlayer?.role || "\u2014" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 149,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { style: { height: 8, background: "rgba(255,255,255,0.04)", borderRadius: 6, marginTop: 8 }, children: /* @__PURE__ */ React.createElement("div", { style: { width: `${Math.max(0, Math.min(100, (selectedPlayer?.stamina ?? 1) * 100))}%`, height: "100%", background: selectedPlayer?.stamina < 0.35 ? "#ff6b6b" : "#ffdd57", borderRadius: 6 } }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 151,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 150,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 147,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", minWidth: 80 }, children: [
            /* @__PURE__ */ React.createElement("div", { className: "small", children: "Stamina" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 156,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800 }, children: [
              Math.round((selectedPlayer?.stamina ?? 1) * 100),
              "%"
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 157,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 155,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 10, display: "flex", justifyContent: "space-between", gap: 8 }, children: [
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: [
            /* @__PURE__ */ React.createElement("div", { style: { width: 10, height: 10, borderRadius: 4, background: possession === "left" ? accentLeft : "transparent", border: `1px solid ${accentLeft}` } }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 164,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { className: "small", children: "Possession" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 165,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800 }, children: match.possessionPctLeft ? `${match.possessionPctLeft}%` : "\u2014" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 166,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 163,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" }, children: [
            /* @__PURE__ */ React.createElement("div", { className: "small", children: "Cards: " }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 170,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { className: "small", children: [
              leftCards,
              " / ",
              rightCards
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 171,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { className: "small", children: "Corners: " }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 172,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { className: "small", children: [
              leftCorners,
              " / ",
              rightCorners
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 173,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { className: "small", children: "Subs: " }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 174,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { className: "small", children: [
              leftSubs,
              " / ",
              rightSubs
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 175,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 169,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 162,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 8, width: 180, height: 120, display: "flex", flexDirection: "column", gap: 6, alignItems: "center", justifyContent: "center" }, children: [
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 700 }, children: "Minimap" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 182,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ React.createElement("div", { style: { width: 152, height: 80, background: "#061017", borderRadius: 6, position: "relative", overflow: "hidden" }, children: minimap?.players?.length ? minimap.players.map((p) => /* @__PURE__ */ React.createElement("div", { style: {
          position: "absolute",
          left: `${(p.x + 60) / 120 * 100}%`,
          top: `${(p.z + 40) / 80 * 100}%`,
          width: p.id === selectedId ? 8 : 6,
          height: p.id === selectedId ? 8 : 6,
          borderRadius: 8,
          transform: "translate(-50%,-50%)",
          background: p.team === "left" ? accentLeft : accentRight,
          border: p.id === selectedId ? "2px solid #fff" : "none"
        } }, p.id, false, {
          fileName: "<stdin>",
          lineNumber: 187,
          columnNumber: 17
        }, this)) : /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(255,255,255,0.2)", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }, children: "No minimap data" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 200,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 183,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, width: 320 }, children: [
        /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 10 }, children: [
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 800 }, children: "Commentary" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("div", { className: "small", style: { marginTop: 6 }, children: commentary }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 209,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ React.createElement("div", { children: [
            /* @__PURE__ */ React.createElement("div", { className: "small", children: "Momentum" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 214,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800 }, children: ui.momentum ?? "\u2014" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 215,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 213,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("div", { children: [
            /* @__PURE__ */ React.createElement("div", { className: "small", children: "Risk" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 218,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800 }, children: ui.risk ?? "\u2014" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 219,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 217,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("div", { children: [
            /* @__PURE__ */ React.createElement("div", { className: "small", children: "Notifications" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 222,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ React.createElement("div", { className: "small", children: notifications.length }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 223,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 221,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 212,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ React.createElement("button", { className: "glass", style: { padding: 10, flex: 1, pointerEvents: "auto" }, onClick: handlePause, children: "Pause" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 228,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("button", { className: "glass", style: { padding: 10, flex: 1, pointerEvents: "auto" }, onClick: handleReplay, children: "Replay" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 229,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 227,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ React.createElement("div", { className: "small", children: [
            "Latency: ",
            latency ?? "\u2014",
            " ms"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 233,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ React.createElement("div", { className: "small", children: [
            "FPS: ",
            fps
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 234,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 232,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 206,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 8, pointerEvents: "auto" }, children: [
      /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 8, display: "flex", gap: 8, alignItems: "center" }, children: [
        /* @__PURE__ */ React.createElement("div", { className: "small", children: [
          "Offsides: ",
          match.offsides ?? 0
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 242,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ React.createElement("div", { className: "small", children: [
          "Fouls: ",
          match.fouls ?? 0
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 243,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 241,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 8, minWidth: 80, textAlign: "center" }, children: "Pause" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ React.createElement("div", { className: "glass", style: { padding: 8, minWidth: 80, textAlign: "center" }, children: "Chat" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 248,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 246,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 240,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
export {
  HUD as default
};
