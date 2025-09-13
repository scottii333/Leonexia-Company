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
      className="fixed bottom-2 right-2 px-4 py-2 bg-[#D1F470] text-[#11110D] rounded-full shadow-lg 
             hover:bg-white hover:text-[#355E34] border border-[#355E34] 
             transition duration-300 ease-in-out hover:scale-105 z-50 
             md:hidden cursor-pointer"
      aria-label="Schedule a consultation via Cal.com"
    >
      Schedule A Meeting
    </button>
  );
};
