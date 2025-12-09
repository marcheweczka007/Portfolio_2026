// src/components/ui/ScrollProgress.tsx
import React, { useEffect, useState } from "react";

interface ScrollProgressProps {
  /** Height of your fixed nav in px, so the bar sits under it */
  offsetTop?: number;
}

export function ScrollProgress({ offsetTop = 64 }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const pct = (scrollTop / docHeight) * 100;
      setProgress(pct);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] block lg:hidden pointer-events-none">
      <div
        className="h-2 bg-orange-500/90 transition-[width] "
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
