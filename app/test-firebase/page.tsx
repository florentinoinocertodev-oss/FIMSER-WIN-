"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firestore";

export default function TestFirebase() {
  const [status, setStatus] = useState("Testando Firebase...");

  useEffect(() => {
    async function testFirebase() {
      try {
        const snapshot = await getDocs(collection(db, "users"));

        setStatus(
          `Firebase conectado. Registos encontrados: ${snapshot.size}`
        );
      } catch (error) {
        console.error(error);
        setStatus("Erro na ligação Firebase");
      }
    }

    testFirebase();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">
        FIMSER WIN - Firebase Test
      </h1>

      <p className="mt-5">
        {status}
      </p>
    </main>
  );
}
