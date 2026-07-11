import { jsxDEV } from "react/jsx-dev-runtime";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/MainLayout.jsx";
import { VisualStateProvider } from "./network/visualState.jsx";
import Splash from "./pages/Splash.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Match from "./pages/Match.jsx";
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Store = lazy(() => import("./pages/Store.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const Wallet = lazy(() => import("./screens/Wallet.jsx"));
const Deposit = lazy(() => import("./screens/Deposit.jsx"));
const Withdraw = lazy(() => import("./screens/Withdraw.jsx"));
const Statistics = lazy(() => import("./screens/Statistics.jsx"));
const Notifications = lazy(() => import("./screens/Notifications.jsx"));
const Friends = lazy(() => import("./screens/Friends.jsx"));
const Leaderboard = lazy(() => import("./screens/Leaderboard.jsx"));
const ClubSelection = lazy(() => import("./screens/ClubSelection.jsx"));
const CompetitionSelection = lazy(() => import("./screens/CompetitionSelection.jsx"));
const Tournament = lazy(() => import("./screens/Tournament.jsx"));
const Season = lazy(() => import("./screens/Season.jsx"));
const Inventory = lazy(() => import("./screens/Inventory.jsx"));
const Customization = lazy(() => import("./screens/Customization.jsx"));
const Settings = lazy(() => import("./screens/Settings.jsx"));
const Premium = lazy(() => import("./screens/Premium.jsx"));
const VIP = lazy(() => import("./screens/VIP.jsx"));
const MatchLobby = lazy(() => import("./screens/MatchLobby.jsx"));
const LoadingScreen = lazy(() => import("./screens/LoadingScreen.jsx"));
const PauseMenu = lazy(() => import("./screens/PauseMenu.jsx"));
const ReplayScreen = lazy(() => import("./screens/ReplayScreen.jsx"));
const Results = lazy(() => import("./screens/Results.jsx"));
const Rewards = lazy(() => import("./screens/Rewards.jsx"));
const Achievements = lazy(() => import("./screens/Achievements.jsx"));
const BattlePass = lazy(() => import("./screens/BattlePass.jsx"));
const Marketplace = lazy(() => import("./screens/Marketplace.jsx"));
const Support = lazy(() => import("./screens/Support.jsx"));
const ForgotPassword = lazy(() => import("./screens/ForgotPassword.jsx"));
function App() {
  return /* @__PURE__ */ jsxDEV(VisualStateProvider, { children: /* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(Suspense, { fallback: /* @__PURE__ */ jsxDEV("div", { style: { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, children: "Loading\u2026" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 50,
    columnNumber: 29
  }, this), children: /* @__PURE__ */ jsxDEV(Routes, { children: [
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Splash, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 52,
      columnNumber: 38
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/auth/login", element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 48
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/auth/register", element: /* @__PURE__ */ jsxDEV(Register, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 54,
      columnNumber: 51
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/auth/forgot", element: /* @__PURE__ */ jsxDEV(ForgotPassword, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 55,
      columnNumber: 49
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { element: /* @__PURE__ */ jsxDEV(Layout, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 56,
      columnNumber: 29
    }, this), children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/dashboard", element: /* @__PURE__ */ jsxDEV(Dashboard, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 57,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 57,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/wallet", element: /* @__PURE__ */ jsxDEV(Wallet, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 58,
        columnNumber: 46
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 58,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/wallet/deposit", element: /* @__PURE__ */ jsxDEV(Deposit, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 59,
        columnNumber: 54
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 59,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/wallet/withdraw", element: /* @__PURE__ */ jsxDEV(Withdraw, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 55
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/statistics", element: /* @__PURE__ */ jsxDEV(Statistics, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/notifications", element: /* @__PURE__ */ jsxDEV(Notifications, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 62,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 62,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/friends", element: /* @__PURE__ */ jsxDEV(Friends, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/leaderboard", element: /* @__PURE__ */ jsxDEV(Leaderboard, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/club", element: /* @__PURE__ */ jsxDEV(ClubSelection, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 65,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 65,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/competition", element: /* @__PURE__ */ jsxDEV(CompetitionSelection, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 66,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 66,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/tournament", element: /* @__PURE__ */ jsxDEV(Tournament, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 67,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 67,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/season", element: /* @__PURE__ */ jsxDEV(Season, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 68,
        columnNumber: 46
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/store", element: /* @__PURE__ */ jsxDEV(Store, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/inventory", element: /* @__PURE__ */ jsxDEV(Inventory, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 70,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/customization", element: /* @__PURE__ */ jsxDEV(Customization, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 71,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 71,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/settings", element: /* @__PURE__ */ jsxDEV(Settings, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 72,
        columnNumber: 48
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 72,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/premium", element: /* @__PURE__ */ jsxDEV(Premium, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 73,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 73,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/vip", element: /* @__PURE__ */ jsxDEV(VIP, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 74,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 74,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/match/lobby", element: /* @__PURE__ */ jsxDEV(MatchLobby, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 75,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 75,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/match/loading", element: /* @__PURE__ */ jsxDEV(LoadingScreen, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 76,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/match/:id", element: /* @__PURE__ */ jsxDEV(Match, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 77,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 77,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/pause", element: /* @__PURE__ */ jsxDEV(PauseMenu, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 78,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 78,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/replay", element: /* @__PURE__ */ jsxDEV(ReplayScreen, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 79,
        columnNumber: 46
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 79,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/results", element: /* @__PURE__ */ jsxDEV(Results, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 80,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/rewards", element: /* @__PURE__ */ jsxDEV(Rewards, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 81,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 81,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/achievements", element: /* @__PURE__ */ jsxDEV(Achievements, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 82,
        columnNumber: 52
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 82,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/battlepass", element: /* @__PURE__ */ jsxDEV(BattlePass, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 83,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 83,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/marketplace", element: /* @__PURE__ */ jsxDEV(Marketplace, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 84,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 84,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/support", element: /* @__PURE__ */ jsxDEV(Support, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 85,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 85,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/profile", element: /* @__PURE__ */ jsxDEV(Profile, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 86,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 86,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/store", element: /* @__PURE__ */ jsxDEV(Store, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 87,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 87,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 56,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 51,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
export {
  App as default
};
