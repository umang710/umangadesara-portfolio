"use client";

import { useState, useEffect } from "react";

export function SplashScreen() {
  const [stage, setStage] = useState<"visible" | "fading" | "hidden">(
    "visible",
  );

  useEffect(() => {
    const fadeTimer = setTimeout(() => setStage("fading"), 1200);
    const hideTimer = setTimeout(() => setStage("hidden"), 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (stage === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-brand-light dark:bg-background transition-opacity duration-700 ease-in-out ${
        stage === "fading" ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-brand-accent animate-in fade-in slide-in-from-top-8 duration-700 pb-4">
        Umang Adesara
      </h1>
    </div>
  );
}
