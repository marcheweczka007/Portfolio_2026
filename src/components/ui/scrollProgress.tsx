// src/components/ui/ScrollProgress.tsx (or similar)
import React, { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

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
      // Temporary: see it in console too
      // console.log("scroll %", pct.toFixed(1));
    };

    handleScroll(); // run once on mount

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
      <div
        className="h-2 bg-pink-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}


