"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

type LoadingProgressProps = {
  color?: string; // Tailwind color/gradient
  target?: number; // how far the bar should load (default 100)
  onComplete?: () => void; // ✅ callback when loading finishes
};

export function LoadingProgress({
  color = "bg-gray-500",
  target = 100,
  onComplete,
}: LoadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= target) {
          clearInterval(timer);
          onComplete?.(); // ✅ fire callback
          return target;
        }
        return old + 10;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [target, onComplete]);

  return (
    <Progress
      value={progress}
      className="h-2 mt-2"
      indicatorClassName={color}
    />
  );
}
