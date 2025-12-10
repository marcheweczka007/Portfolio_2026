import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  /** Distance from bottom (in pixels) to show the button. Default: 200 */
  threshold?: number;
  /** Custom className for the button container */
  className?: string;
}

export function ScrollToTop({ threshold = 200, className }: ScrollToTopProps) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      // Show button when user is within threshold of the bottom
      setShowScrollToTop(scrollBottom >= documentHeight - threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollToTop) return null;

  return (
    <div className={className || "fixed bottom-8 right-8 z-50"}>
      <Button
        onClick={scrollToTop}
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
