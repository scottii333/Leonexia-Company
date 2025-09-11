"use client";
import { useEffect, useState, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";

export const FloatingScheduleButton = () => {
  const [ready, setReady] = useState(false);
  const NAMESPACE = "leonexiaFloating";

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      const brand = { "cal-brand": "#16a34a" } as const;

      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: brand, dark: brand },
      });

      cal("preload", { calLink: "/leonexia/business-growth" }); // ✅ leading slash
      setReady(true);
    })().catch(console.error);
  }, []);

  const openCal = useCallback(async () => {
    if (!ready) return;
    const cal = await getCalApi({ namespace: NAMESPACE });
    cal("modal", { calLink: "/leonexia/business-growth" });
  }, [ready]);

  return (
    <button
      type="button"
      onClick={openCal}
      disabled={!ready}
      className="fixed bottom-6 right-6 px-4 py-2 bg-green-700 text-white rounded-full shadow-lg 
                 hover:bg-white hover:text-green-700 border border-green-700 
                 transition-colors duration-300 z-50 
                 md:hidden"
      aria-label="Schedule a consultation via Cal.com"
    >
      Schedule A Meeting
    </button>
  );
};
