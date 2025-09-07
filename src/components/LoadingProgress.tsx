"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

type LoadingProgressProps = {
  color?: string; // Tailwind color/gradient
};

export function LoadingProgress({
  color = "bg-green-500",
}: LoadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        return old + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Progress
      value={progress}
      className="h-2 mt-2"
      indicatorClassName={color} // ✅ pass custom color/gradient here
    />
  );
}
