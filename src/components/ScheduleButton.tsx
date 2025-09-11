"use client";
import { useEffect, useState, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react";

type ScheduleButtonProps = {
  className?: string;
  children?: React.ReactNode;
  withArrow?: boolean;
};

export const ScheduleButton = ({
  className = "",
  children = "Schedule Consultation",
  withArrow = true,
}: ScheduleButtonProps) => {
  const [ready, setReady] = useState(false);
  const NAMESPACE = "leonexiaModal";

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      const brand = { "cal-brand": "#16a34a" } as const;

      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: brand, dark: brand },
      });

      cal("preload", { calLink: "/leonexia/business-growth" });
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
      className={className}
      aria-label="Schedule a consultation via Cal.com"
    >
      {children}
      {withArrow && <ArrowRight size={16} />}
    </button>
  );
};
