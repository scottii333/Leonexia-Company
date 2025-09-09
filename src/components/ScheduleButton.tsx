"use client";

import { useEffect, useState, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react";

export const ScheduleButton = ({ className }: { className?: string }) => {
  const [ready, setReady] = useState(false);
  const NAMESPACE = "leonexiaModal";

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });

      const brand = { "cal-brand": "#16a34a" } as const;

      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: brand,
          dark: brand, // required ng type kahit di mo ginagamit
        },
      });

      // optional pero useful para iwas iframe error sa click
      cal("preload", { calLink: "leonexia/30min" });

      setReady(true);
    })().catch((e) => console.error(e));
  }, []);

  const openCal = useCallback(async () => {
    if (!ready) return;
    const cal = await getCalApi({ namespace: NAMESPACE });
    cal("modal", { calLink: "leonexia/30min" });
  }, [ready]);

  return (
    <button
      onClick={openCal}
      disabled={!ready}
      className={className}
      aria-label="Schedule a consultation via Cal.com"
    >
      Schedule Consultation
      <ArrowRight
        className="inline-block ml-5 text-white transition-colors duration-300 group-hover:text-green-600"
        size={16}
      />
    </button>
  );
};
