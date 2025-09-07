"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function HomeGsap({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Fade in left column
    tl.to("#left-col", { opacity: 1, y: 0, duration: 1 });

    // 2. Fade in right column
    tl.to("#right-col", { opacity: 1, y: 0, duration: 1 });

    // 3. Fade in top section
    tl.to("#top-section", { opacity: 1, y: 0, duration: 1 });

    // 4. Wait for the loading bar to "finish" (about 5s for 50%)
    tl.to({}, { duration: 2 }); // dummy step = 5s delay

    // 5. Then fade in middle + bottom sections
    tl.to("#middle-section", { opacity: 1, y: 0, duration: 1 });
    tl.to("#bottom-left", { opacity: 1, y: 0, duration: 1 });
    tl.to("#bottom-right", { opacity: 1, y: 0, duration: 1 });
  }, []);

  return <>{children}</>;
}
