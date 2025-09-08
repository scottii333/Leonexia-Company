"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HomeGsap({ children }: { children: React.ReactNode }) {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // 🔹 Master GSAP timeline controlling sequence of animations
    const timeline = gsap.timeline({
      defaults: { opacity: 0, y: 30, duration: 0.3 },
    });

    // Step 1 → fade in left column
    timeline.to("#left-col", { opacity: 1, y: 0 });

    // Step 2 → fade in right column
    timeline.to("#right-col", { opacity: 1, y: 0 });

    // Step 3 → fade in top section
    // 🔹 When visible, start the first loading bar
    timeline.to("#top-section", {
      opacity: 1,
      y: 0,
      onComplete: () => {
        const firstLoader = document.getElementById("progress-1");
        firstLoader?.dispatchEvent(new CustomEvent("startLoading"));
      },
    });

    // Step 4 → fade in middle section (brain + lines)
    timeline.to("#middle-section", { opacity: 1, y: 0 });

    // Step 5 → fade in bottom-left card
    timeline.to("#bottom-left", { opacity: 1, y: 0 });

    // Step 6 → inside bottom-left, fade in items one by one
    timeline.to("#assess", { opacity: 1, y: 0 });
    timeline.to("#deploy", { opacity: 1, y: 0 });
    timeline.to("#optimize", {
      opacity: 1,
      y: 0,
      onComplete: () => {
        // 🔹 After Optimize appears, start the second loader
        const secondLoader = document.getElementById("progress-2");
        secondLoader?.dispatchEvent(new CustomEvent("startLoading"));
      },
    });

    // Step 7 → fade in bottom-right card
    // 🔹 The second loader + stats are handled inside LoadingProgress
    timeline.to("#bottom-right", { opacity: 1, y: 0 });

    tl.current = timeline;
  }, []);

  // Render children (wrapping the hero layout)
  return <>{children}</>;
}
