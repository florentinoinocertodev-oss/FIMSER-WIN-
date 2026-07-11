import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./ui/global.css";

import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

async function testarFirebase() {
  try {
    const snapshot = await getDocs(collection(db, "users"));

    console.log("Firebase conectado com sucesso!");

    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });

  } catch (error) {
    console.error("Erro Firebase:", error);
  }
}

testarFirebase();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
