"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import gsap from "gsap";

type LoadingProgressProps = {
  id: string;
  color?: string;
  target?: number;
  duration?: number; // ms per step
};

export function LoadingProgress({
  id,
  color = "bg-gray-500",
  target = 100,
  duration = 300,
}: LoadingProgressProps) {
  // Local state to hold the current progress value
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    // 🔹 Handle custom "startLoading" event
    // When received, this function begins animating the progress bar
    const handleStart = () => {
      setProgress(0); // reset bar to 0 before starting

      // 🔹 Interval simulates the loading bar filling up
      const timer = setInterval(() => {
        setProgress((old) => {
          // When bar reaches or exceeds target → stop loading
          if (old >= target) {
            clearInterval(timer);

            // If this is the second loader → trigger stats animations
            if (id === "progress-2") {
              gsap.to("#stat-1", { opacity: 1, y: 0, duration: 0.3 });
              gsap.to("#stat-2", {
                opacity: 1,
                y: 0,
                duration: 0.3,
                delay: 0.3,
              });
              gsap.to("#stat-3", {
                opacity: 1,
                y: 0,
                duration: 0.3,
                delay: 0.6,
              });
            }

            return target; // lock at 100% (or target)
          }

          // Otherwise keep incrementing progress by 20
          return old + 20;
        });
      }, duration); // increment every X ms
    };

    // 🔹 Add event listener so GSAP can trigger this loader
    el.addEventListener("startLoading", handleStart);

    // 🔹 Cleanup on unmount
    return () => {
      el.removeEventListener("startLoading", handleStart);
    };
  }, [id, target, duration]);

  // 🔹 Render progress bar with dynamic value + custom indicator color
  return (
    <Progress
      id={id}
      value={progress}
      className="h-2 mt-2"
      indicatorClassName={color}
    />
  );
}
