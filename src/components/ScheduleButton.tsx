"use client";

import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react"; // assuming you use lucide

export const ScheduleButton = ({ className }: { className?: string }) => {
  const [calReady, setCalReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const cal = await getCalApi();
        cal("ui", {
          styles: { branding: { brandColor: "#16a34a" } },
          theme: "light",
        });
        setCalReady(true);
      } catch (error) {
        console.error("Cal.com API failed to initialize:", error);
      }
    })();
  }, []);

  async function openCal() {
    if (!calReady) return;
    try {
      const cal = await getCalApi();
      cal("modal", { calLink: "leonexia/30min" });
    } catch (error) {
      console.error("Cal.com failed to open:", error);
    }
  }

  return (
    <button
      onClick={openCal}
      disabled={!calReady}
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
