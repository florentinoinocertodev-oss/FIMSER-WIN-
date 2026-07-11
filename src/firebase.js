import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBgxyY2EMgTfxZJDhSHt6DpTbaDDYGcXls",
  authDomain: "fimser-win.firebaseapp.com",
  projectId: "fimser-win",
  storageBucket: "fimser-win.firebasestorage.app",
  messagingSenderId: "310694708393",
  appId: "1:310694708393:web:74237f4607b53f04cd15b8",
  measurementId: "G-4V9C3C7XTZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Analytics só funciona no navegador
let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
